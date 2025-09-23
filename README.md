
# Inline Copilot — Full Template

This repo contains:
- `extension/` — Chrome Extension (MV3) with a React content script and service worker
- `next-app/` — Next.js API server that proxies OpenAI Responses API with streaming

## Quick Start

### 1) Start the API
```bash
cd next-app
cp .env.example .env.local   # Add your OPENAI_API_KEY
npm install
npm run dev                  # http://localhost:3000
```

### 2) Build & load the extension
```bash
cd ../extension
npm install
npm run build                # outputs to extension/dist
```
Open Chrome → `chrome://extensions` → **Developer mode** → **Load unpacked** → select `extension/dist`

### 3) Use it
- Go to any webpage
- Hit **Cmd+Shift+K** (mac) / **Ctrl+Shift+K** (win/linux)
- Type a message, press Enter to send; watch tokens stream in.

## Deploying
- Host `next-app` somewhere (Vercel, Fly, Render, etc.).
- Update `fetch("http://localhost:3000/api/chat", ...)` in `extension/src/worker.ts` and `host_permissions` in `manifest.json` to your domain.
