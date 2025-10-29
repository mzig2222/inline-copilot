import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  // Generate a token here (JWT recommended)
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  return NextResponse.json({ token, user: { id: user.id, username: user.username } });
}
