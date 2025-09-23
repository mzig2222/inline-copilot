// src/worker.ts

async function ensureContentInjected(tabId: number) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js'], // built from src/content/main.tsx
    });
  } catch (e) {
    // Happens on restricted pages (e.g., chrome://, Chrome Web Store, PDFs)
    console.warn('Injection failed:', e);
  }
}

chrome.commands.onCommand.addListener(async (cmd) => {
  if (cmd !== 'toggle-overlay') return;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  await ensureContentInjected(tab.id);
  chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE' });
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Inline Copilot installed');
});

chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== 'copilot') return;

  port.onMessage.addListener(async (msg) => {
    if (msg.type !== 'ask') return;
    try {
      const resp = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: msg.input }),
      });
      const reader = resp.body?.getReader();
      if (!reader) return port.postMessage({ type: 'done', error: 'no stream' });

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        if (chunk) port.postMessage({ type: 'delta', token: chunk });
      }
      port.postMessage({ type: 'done' });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      port.postMessage({ type: 'done', error: message });
    }
  });
});
