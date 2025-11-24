import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// get single item
async function resolveId(context: any) {
  const p = context?.params;
  const params = typeof p?.then === 'function' ? await p : p;
  const id = parseInt(String(params?.id ?? ''));
  return id;
}

export async function GET(request: Request, context: any) {
  const id = await resolveId(context);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'id tidak valid' }, { status: 400 });
  }
  const item = await prisma.item.findUnique({ where: { id } });
  if (!item) {
    return NextResponse.json({ error: 'item tidak ditemukan' }, { status: 404 });
  }
  return NextResponse.json(item);
}

// update single item
export async function PUT(request: Request, context: any) {
  const id = await resolveId(context);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'id tidak valid' }, { status: 400 });
  }
  const body = await request.json();
  try {
    const p: any = prisma;
    // ambil item lama untuk menghitung selisih balance
    const oldItem = await p.item.findUnique({ where: { id } });
    if (!oldItem) return NextResponse.json({ error: 'item tidak ditemukan' }, { status: 404 });
    const updatedData: any = {
      description: body.description,
      amount: body.amount,
      type: body.type === 'INCOME' ? 'INCOME' : 'EXPENSE',
      category: body.category ?? null,
      isRecurring: !!body.isRecurring,
      recurrence: body.recurrence ?? null,
      nextOccurrence: body.nextOccurrence ? new Date(body.nextOccurrence) : null,
      date: body.date ? new Date(body.date) : new Date(),
    };

    // hitung selisih efek: newEffect - oldEffect
    const oldEffect = (oldItem.type === 'INCOME' ? 1 : -1) * oldItem.amount;
    const newEffect = (updatedData.type === 'INCOME' ? 1 : -1) * updatedData.amount;
    const delta = newEffect - oldEffect;

    const [updated] = await p.$transaction([
      p.item.update({ where: { id }, data: updatedData }),
      p.account.upsert({
        where: { name: 'default' },
        update: { balance: { increment: delta } },
        create: { name: 'default', balance: delta },
      }),
    ]);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'gagal mengupdate item' }, { status: 500 });
  }
}

// handle metode override via post (dari form) untuk hapus
export async function POST(request: Request, context: any) {
  const formData = await request.formData();
  const method = formData.get('_method');
  if (method === 'DELETE') {
    const id = await resolveId(context);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'id tidak valid' }, { status: 400 });
    }
    try {
      const p: any = prisma;
      const item = await p.item.findUnique({ where: { id } });
      if (!item) return NextResponse.json({ error: 'item tidak ditemukan' }, { status: 404 });
      const effect = (item.type === 'INCOME' ? 1 : -1) * item.amount;
      await p.$transaction([
        p.item.delete({ where: { id } }),
        p.account.upsert({
          where: { name: 'default' },
          update: { balance: { increment: -effect } },
          create: { name: 'default', balance: -effect },
        }),
      ]);
      return NextResponse.redirect(new URL('/items', request.url));
    } catch (error) {
      return NextResponse.json({ error: 'gagal menghapus item' }, { status: 500 });
    }
  }
  return NextResponse.json({ error: 'metode tidak dikenal' }, { status: 400 });
}

// delete single item
export async function DELETE(request: Request, context: any) {
  const id = await resolveId(context);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'id tidak valid' }, { status: 400 });
  }
  try {
    await prisma.item.delete({ where: { id } });
    return NextResponse.json({ message: 'item terhapus' });
  } catch (error) {
    return NextResponse.json({ error: 'gagal menghapus item' }, { status: 500 });
  }
}