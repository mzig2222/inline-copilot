import { NextRequest } from "next/server";
import prisma from "./prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export type User = {
  id: number;
  username: string;
  password: string;
  openaiApiKey?: string;
};

export async function getUserFromSession(
  req: NextRequest,
  jwtOverride?: string
): Promise<User | null> {
  const authHeader = jwtOverride
    ? `Bearer ${jwtOverride}`
    : req.headers.get("authorization");
  if (!authHeader) return null;
  const token = authHeader.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { id: number };
    if (!payload.id) return null;
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    return user as User;
  } catch {
    return null;
  }
}
