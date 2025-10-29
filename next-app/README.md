
# Inline Copilot — Next.js Companion App

A minimal Next.js (App Router) server that exposes `/api/chat` and streams tokens from OpenAI’s Responses API back to the Chrome extension.

## Setup
1. `cd next-app`
2. `cp .env.example .env.local` and set `OPENAI_API_KEY`
3. `npm install`
4. `npx prisma generate`
5. `npx prisma migrate dev --name init`
6. `npm run dev` (starts on http://localhost:3000)

## Endpoint
- `POST /api/chat` with body `{ "input": "your prompt" }`
- Streams tokens (SSE) directly to the caller.

> Keep your API key **server-side**. The Chrome extension calls this endpoint; do not embed keys in the extension.
