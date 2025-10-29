import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { username, password: hashed }
    });
    return NextResponse.json({ user: { id: user.id, username: user.username } });
  } catch (e) {
    return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
  }
}
