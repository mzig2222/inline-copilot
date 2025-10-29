import { NextRequest } from "next/server";
import { getUserFromSession } from "../../../../lib/auth"; // implement this helper
import prisma from "../../../../lib/prisma"; // your Prisma client

export async function POST(req: NextRequest) {
  const { apiKey } = await req.json();
  const user = await getUserFromSession(req);
  if (!user) return new Response("Unauthorized", { status:401 });
  await prisma.user.update({ where: { id: user.id }, data: { openaiApiKey: apiKey } });
  return new Response("Saved");
}
