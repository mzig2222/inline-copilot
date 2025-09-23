import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const ROOT_ID = "__inline_copilot_root__";

function ensureShadow(): ShadowRoot {
  let host = document.getElementById(ROOT_ID) as HTMLElement | null;
  if (!host) {
    host = document.createElement("div");
    host.id = ROOT_ID;
    host.style.all = "initial";
    host.style.position = "fixed";
    host.style.inset = "auto 16px 16px auto";
    host.style.zIndex = "2147483647";
    document.documentElement.appendChild(host);
  }
  return host.shadowRoot ?? host.attachShadow({ mode: "open" });
}

function UI() {
  const [input, setInput] = useState("");
  const [out, setOut] = useState("");
  const portRef = useRef<chrome.runtime.Port | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .panel{font:14px system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:12px;background:#111;color:#eee;border:1px solid #333;border-radius:12px;width:420px;box-shadow:0 8px 30px rgba(0,0,0,.35)}
      .row{display:flex;gap:8px;margin-top:8px}
      .btn{padding:8px 12px;background:#222;border:1px solid #444;border-radius:8px;cursor:pointer;color:#fff;}
      .btn:hover{background:#2b2b2b}
      .ta{width:100%; background:#0b0b0b; color:#eee; border:1px solid #333; border-radius:8px; padding:8px}
      .out{white-space:pre-wrap; margin-top:10px; font:13px ui-monospace,Menlo,Consolas,monospace}
    `;
    ensureShadow().appendChild(style);
  }, []);

  const ask = () => {
    if (!portRef.current) {
      portRef.current = chrome.runtime.connect({ name: "copilot" });
      portRef.current.onMessage.addListener((msg) => {
        if (msg.type === "delta") setOut((p) => p + msg.token);
        if (msg.type === "done" && msg.error) setOut((p) => p + "\n\n[Error] " + msg.error);
      });
    }
    setOut("");
    portRef.current!.postMessage({ type: "ask", input });
  };

  return (
    <div className="panel">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <strong>Inline Copilot</strong>
        <button className="btn" onClick={() => ((ensureShadow() as any).host.style.display = "none")}>Close</button>
      </div>
      <textarea className="ta" rows={4} value={input} onChange={(e)=>setInput(e.target.value)}
        placeholder="Ask anything... (Enter to send, Shift+Enter = newline)"
        onKeyDown={(e)=>{ if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); ask(); }}} />
      <div className="row">
        <button className="btn" onClick={ask}>Ask</button>
        <button className="btn" onClick={()=>{ setInput(""); setOut(""); }}>Clear</button>
      </div>
      <div className="out">{out}</div>
    </div>
  );
}

function mount() {
  const shadow = ensureShadow();
  const mountEl = document.createElement("div");
  shadow.appendChild(mountEl);
  (shadow as any).host.style.display = "none"; // start hidden
  createRoot(mountEl).render(<UI />);
}

function getTargetRect() {
  // Try selection first
  const sel = window.getSelection();
  if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) return rect;
  }
  // Fallback: focused element
  const active = document.activeElement;
  if (active && (active instanceof HTMLElement)) {
    const rect = active.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) return rect;
  }
  return null;
}

function positionPopup(host: HTMLElement, rect: DOMRect) {
  const popupHeight = 220; // Approximate, could measure
  const margin = 8;
  const topSpace = rect.top;
  if (topSpace > popupHeight + margin) {
    // Place above
    host.style.top = `${rect.top - popupHeight - margin + window.scrollY}px`;
  } else {
    // Place below
    host.style.top = `${rect.bottom + margin + window.scrollY}px`;
  }
  host.style.left = `${rect.left + window.scrollX}px`;
  host.style.right = "auto";
  host.style.bottom = "auto";
  host.style.position = "absolute";
  host.style.zIndex = "2147483647";
}

chrome.runtime.onMessage.addListener((m) => {
  if (m?.type === "TOGGLE") {
    const host = (ensureShadow() as any).host as HTMLElement;
    if (host.style.display === "none") {
      const rect = getTargetRect();
      if (rect) {
        positionPopup(host, rect);
      } else {
        // fallback to default position
        host.style.position = "fixed";
        host.style.inset = "auto 16px 16px auto";
      }
      host.style.display = "block";
    } else {
      host.style.display = "none";
    }
  }
});

mount();
