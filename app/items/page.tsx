import Link from 'next/link';
import { Item } from '@prisma/client';
import React from 'react';
import AccountBalance from '../../components/AccountBalance';

// fetch all items
async function getItems(): Promise<Item[]> {
  const res = await fetch('http://localhost:3000/api/items', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('failed to fetch items');
  }
  return res.json();
}

// main items page listing all items
export default async function ItemsPage() {
  const items = await getItems();
  // hitung totals
  const typedItems = items as any[];
  const totalIncome = typedItems.filter((i) => i.type === 'INCOME').reduce((s, i) => s + i.amount, 0);
  const totalExpense = typedItems.filter((i) => i.type === 'EXPENSE').reduce((s, i) => s + i.amount, 0);
  const balance = totalIncome - totalExpense;
  // account balance is shown by client component for live updates

  return (
    <div>
      <h1>daftar pengeluaran dan pemasukan</h1>
      <div className="mb-3">
        <div className="d-flex gap-3 align-items-center">
          <div className="badge bg-success">Income: {totalIncome.toFixed(2)}</div>
          <div className="badge bg-danger">Expense: {totalExpense.toFixed(2)}</div>
          {}
          <AccountBalance compact />
        </div>
      </div>
      <div className="mb-3">
        <Link href="/items/new" className="btn btn-primary">tambah item</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>deskripsi</th>
            <th>tipe</th>
            <th>kategori</th>
            <th>jumlah</th>
            <th>tanggal</th>
            <th>aksi</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                {/* link to detail page */}
                <Link href={`/items/${item.id}`}>{item.description}</Link>
              </td>
              <td>{(item as any).type}</td>
              <td>{(item as any).category ?? '-'}{(item as any).isRecurring ? (<span className="ms-2 badge bg-warning text-dark">recurring</span>) : null}</td>
              <td>{item.amount}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>
                <Link href={`/items/${item.id}/edit`} className="btn btn-sm btn-secondary me-2">
                  edit
                </Link>
                {/*memakai form untuk delete*/}
                <form
                  action={`/api/items/${item.id}`}
                  method="POST"
                  style={{ display: 'inline' }}
                >
                  <input type="hidden" name="_method" value="DELETE" />
                  <button type="submit" className="btn btn-sm btn-danger">
                    hapus
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}