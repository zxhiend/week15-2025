'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// client page for creating a new item
export default function NewItemPage() {
  const router = useRouter();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState<'EXPENSE' | 'INCOME'>('EXPENSE');
  const [category, setCategory] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrence, setRecurrence] = useState<'daily' | 'weekly' | 'monthly' | 'yearly' | ''>('');
  const [nextOccurrence, setNextOccurrence] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // buat object untuk di-send
    const item = {
      description,
      amount: parseFloat(amount),
      date: date ? new Date(date).toISOString() : new Date().toISOString(),
      type,
      category: category || null,
      isRecurring,
      recurrence: recurrence || null,
      nextOccurrence: nextOccurrence ? new Date(nextOccurrence).toISOString() : null,
    };
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (res.ok) {
      router.push('/items');
    } else {
      alert('gagal membuat item');
    }
  }

  return (
    <div>
      <h1>tambah item baru</h1>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
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
            step="0.01"
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
        <div className="mb-3">
          <label className="form-label">tipe</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="expense"
                value="EXPENSE"
                checked={type === 'EXPENSE'}
                onChange={() => setType('EXPENSE')}
              />
              <label className="form-check-label" htmlFor="expense">
                Expense
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="income"
                value="INCOME"
                checked={type === 'INCOME'}
                onChange={() => setType('INCOME')}
              />
              <label className="form-check-label" htmlFor="income">
                Income
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            kategori (opsional)
          </label>
          <input
            id="category"
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            id="isRecurring"
            type="checkbox"
            className="form-check-input"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
          />
          <label htmlFor="isRecurring" className="form-check-label">
            recurring payment
          </label>
        </div>
        {isRecurring && (
          <div className="mb-3">
            <label htmlFor="recurrence" className="form-label">
              recurrence
            </label>
            <select
              id="recurrence"
              className="form-select mb-2"
              value={recurrence}
              onChange={(e) => setRecurrence(e.target.value as any)}
            >
              <option value="">-- pilih --</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <label htmlFor="nextOccurrence" className="form-label">
              next occurrence
            </label>
            <input
              id="nextOccurrence"
              type="date"
              className="form-control"
              value={nextOccurrence}
              onChange={(e) => setNextOccurrence(e.target.value)}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          simpan
        </button>
      </form>
    </div>
  );
}