import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Item } from '@prisma/client';


// fetch single item by id
async function getItem(id: string): Promise<Item | null> {
  const res = await fetch(`http://localhost:3000/api/items/${id}`);
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error('gagal mengambil data');
  }
  return res.json();
}

export default async function ItemDetail({ params }: { params: { id: string } }) {
  const item = await getItem(params.id);
  if (!item) {
    return notFound();
  }
  return (
    <div>
      <h1>detail item</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.description}</h5>
          <p className="card-text">tipe: {(item as any).type}</p>
          <p className="card-text">kategori: {(item as any).category ?? '-'}</p>
          <p className="card-text">jumlah: {item.amount}</p>
          <p className="card-text">tanggal: {new Date(item.date).toLocaleDateString()}</p>
          {(item as any).isRecurring && (
            <p className="card-text">recurs: {(item as any).recurrence} — next: {new Date((item as any).nextOccurrence ?? item.date).toLocaleDateString()}</p>
          )}
          <div className="d-flex gap-2">
            <Link href="/items" className="btn btn-secondary">
              kembali
            </Link>
            {(item as any).isRecurring && (
              <form action={`/api/items/${item.id}`} method="POST">
                <input type="hidden" name="_method" value="DELETE" />
                <button type="submit" className="btn btn-danger">hapus</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}