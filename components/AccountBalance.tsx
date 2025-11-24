"use client";

import { useEffect, useState } from 'react';

type Props = {
  compact?: boolean;
};

export default function AccountBalance({ compact = false }: Props) {
  const [balance, setBalance] = useState<number | null>(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/account');
      if (res.ok) {
        const data = await res.json();
        setBalance(data.balance ?? 0);
      }
    }
    load();
  }, []);

  async function save() {
    const num = parseFloat(value);
    if (isNaN(num)) return alert('balance tidak valid');
    const res = await fetch('/api/account', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ balance: num }),
    });
    if (res.ok) {
      const data = await res.json();
      setBalance(data.balance);
      setEditing(false);
    } else {
      alert('gagal update balance');
    }
  }

  const containerClass = compact ? 'd-flex align-items-center gap-2' : 'd-flex align-items-center gap-3 mb-3';

  return (
    <div className={containerClass}>
      {}
      {!compact && (
        <div>
          <strong>Account balance:</strong>{' '}
          {balance === null ? '—' : balance.toFixed(2)}
        </div>
      )}

      {editing ? (
        <>
          <input className="form-control form-control-sm" style={{ width: 140 }} value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="btn btn-sm btn-primary" onClick={save}>Save</button>
          <button className="btn btn-sm btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div className="badge bg-primary">Balance: {balance === null ? '—' : balance.toFixed(2)}</div>
          <button className="btn btn-sm btn-outline-primary" onClick={() => { setValue(balance !== null ? String(balance) : '0'); setEditing(true); }}>
            Set balance
          </button>
        </>
      )}
    </div>
  );
}
