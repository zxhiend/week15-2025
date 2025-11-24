import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET current account
export async function GET() {
  try {
    const p: any = prisma;
    let acct = await p.account.findUnique({ where: { name: 'default' } });
    if (!acct) {
      acct = await p.account.create({ data: { name: 'default', balance: 0 } });
    }
    return NextResponse.json(acct);
  } catch (e) {
    return NextResponse.json({ error: 'gagal mengambil account' }, { status: 500 });
  }
}

// PATCH account balance
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    if (typeof body.balance !== 'number') {
      return NextResponse.json({ error: 'balance tidak valid' }, { status: 400 });
    }
    const p: any = prisma;
    let acct = await p.account.upsert({
      where: { name: 'default' },
      update: { balance: body.balance },
      create: { name: 'default', balance: body.balance },
    });
    return NextResponse.json(acct);
  } catch (e) {
    return NextResponse.json({ error: 'gagal update balance' }, { status: 500 });
  }
}
