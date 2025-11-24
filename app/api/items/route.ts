import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// get all items
export async function GET() {
  try {
    const items = await prisma.item.findMany({ orderBy: { date: 'desc' } });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: 'gagal mengambil data' }, { status: 500 });
  }
}

// create new item
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // simple validation; ensure description and amount exist
    if (!body.description || typeof body.amount !== 'number') {
      return NextResponse.json({ error: 'data tidak valid' }, { status: 400 });
    }

    // normalize type
    const type = body.type === 'INCOME' ? 'INCOME' : 'EXPENSE';

    const data: any = {
      description: body.description,
      amount: body.amount,
      type,
      category: body.category ?? null,
      isRecurring: !!body.isRecurring,
      recurrence: body.recurrence ?? null,
      nextOccurrence: body.nextOccurrence ? new Date(body.nextOccurrence) : null,
      date: body.date ? new Date(body.date) : new Date(),
    };

    // amount effect on account: income adds, expense subtracts
    const effect = type === 'INCOME' ? body.amount : -body.amount;
    const p: any = prisma;
    // create item and update account in a transaction
    const [newItem] = await p.$transaction([
      p.item.create({ data }),
      // update account balance (create if missing)
      p.account.upsert({
        where: { name: 'default' },
        update: { balance: { increment: effect } },
        create: { name: 'default', balance: effect },
      }),
    ]);
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'gagal membuat item' }, { status: 500 });
  }
}