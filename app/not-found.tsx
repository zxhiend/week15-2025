import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1>404 - halaman tidak ditemukan</h1>
      <p>maaf, halaman yang anda cari tidak ada.</p>
      <Link href="/" className="btn btn-primary">
        kembali ke home
      </Link>
    </div>
  );
}