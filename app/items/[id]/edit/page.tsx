'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditItemPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState<'EXPENSE' | 'INCOME'>('EXPENSE');
  const [category, setCategory] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrence, setRecurrence] = useState<'daily' | 'weekly' | 'monthly' | 'yearly' | ''>('');
  const [nextOccurrence, setNextOccurrence] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/items/${id}`);
        if (res.ok) {
        const item = await res.json();
        setDescription(item.description);
        setAmount(item.amount.toString());
        setDate(item.date.substring(0, 10));
        setType(item.type ?? 'EXPENSE');
        setCategory(item.category ?? '');
        setIsRecurring(!!item.isRecurring);
        setRecurrence(item.recurrence ?? '');
        setNextOccurrence(item.nextOccurrence ? item.nextOccurrence.substring(0, 10) : '');
      }
    }
    fetchData();
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = {
      description,
      amount: parseFloat(amount),
      date: date ? new Date(date).toISOString() : new Date().toISOString(),
      type,
      category: category || null,
      isRecurring,
      recurrence: recurrence || null,
      nextOccurrence: nextOccurrence ? new Date(nextOccurrence).toISOString() : null,
    };
    const res = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push('/items');
    } else {
      alert('gagal mengedit item');
    }
  }

  return (
    <div>
      <h1>edit item</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            deskripsi
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            jumlah
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            tanggal
          </label>
          <input
            id="date"
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          simpan
        </button>
      </form>
    </div>
  );
}