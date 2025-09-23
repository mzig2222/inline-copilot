
# Inline Copilot — Chrome Extension (MV3)

An inline, shadow-DOM React overlay that streams GPT tokens from a companion Next.js API.

## Dev setup
1. `cd extension`
2. `npm install`
3. `npm run build` (bundles to `dist/`)
4. Chrome → `chrome://extensions` → **Developer mode** → **Load unpacked** → select `extension/dist`
5. Pin it, then press **Cmd+Shift+K** (mac) / **Ctrl+Shift+K** (win/linux) to toggle the overlay on any page.

> Make sure the Next.js app is running on `http://localhost:3000` with a working `/api/chat` route (see ../next-app).

## Files
- `manifest.json` — MV3 permissions, commands, background service worker
- `src/content/main.tsx` — React content script; renders overlay in Shadow DOM
- `src/worker.ts` — MV3 service worker; relays streaming tokens from server to content script
- `icons/*` — extension icons

## Notes
- Content script is isolated in a Shadow DOM so styles don’t leak to/from the host page.
- ReadableStream is piped from the server to the content script via `runtime.connect` Port.
- Adjust host permissions in `manifest.json` if you deploy your API on a different domain.
