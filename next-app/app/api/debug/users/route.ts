import { NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
}
