import { NextRequest } from "next/server";
import { getUserFromSession } from "../../../lib/auth";
import prisma from "@/lib/prisma";

//export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("body:", body);
  

  const input = body.input;
  const jwt = body.jwt;
  console.log("jwt:", jwt);
  // Pass jwt directly to getUserFromSession
  const user = await getUserFromSession(req, jwt) as { id: number; username: string; password: string; openaiApiKey?: string };
  if (!user) return new Response("Missing User", { status: 500 });
  if (!user || !user.openaiApiKey) return new Response("Missing OpenAI API key", { status: 500 });

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${user.openaiApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input,
      stream: true
    })
  });

  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text();
    return new Response(text || "Upstream error", { status: upstream.status || 500 });
  }

  // Pipe OpenAI stream straight through
  return new Response(upstream.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*" // Consider restricting in production
    }
  });
}
