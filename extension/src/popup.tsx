import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Popup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerMode, setRegisterMode] = useState(false);
  const [user, setUser] = useState(null);
  const [apiKey, setApiKey] = useState("");

  const handleLogin = async () => {
    console.log("Logging in with", username);
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    console.log("Login response:", data);
    if (data.token) {
        console.log(`Setting user token: ${data.token}`);
      setUser(data.user);
      chrome.storage.local.set({ jwt: data.token });
    }
  };

  const handleRegister = async () => {
    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.user) {
      setRegisterMode(false);
    }
  };

  const handleApiKeySave = async () => {
    const token = await new Promise<string | null>((resolve) => {
      chrome.storage.local.get(["token"], (result) => {
        resolve(result.token || null);
      });
    });
    if (!token) {
      alert("You must be logged in to save your API key.");
      return;
    }
    const res = await fetch("http://localhost:3000/api/user/api-key", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ apiKey })
    });
    if (res.ok) {
        alert("API key saved!");
    } else {
        const errorText = await res.text();
        alert("Failed to save API key: " + errorText);
    }
  };

  return (
    <div style={{ padding: 16, minWidth: 320 }}>
      <h2>Inline Copilot Login</h2>
      {registerMode ? (
        <form onSubmit={e => { e.preventDefault(); handleRegister(); }}>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Register</button>
          <button type="button" onClick={() => setRegisterMode(false)}>Back to Login</button>
        </form>
      ) : (
        <form onSubmit={e => { e.preventDefault(); handleLogin(); }}>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
          <button type="button" onClick={() => setRegisterMode(true)}>Register</button>
        </form>
      )}
      {user && <div>Welcome, {user.username}</div>}
      <div style={{ marginTop: 16 }}>
        <input value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="OpenAI API Key" />
        <button onClick={handleApiKeySave}>Save API Key</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<Popup />);
