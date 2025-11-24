export default function HomePage() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card shadow-sm" style={{ maxWidth: '48rem' }}>
        <div className="card-body text-center py-5">
          <h1 className="card-title display-6 mb-2">Faiz Abdurrahman</h1>
          <h2 className="card-subtitle mb-3 text-muted">NIM: 535240041</h2>
          <p className="lead mb-4">Topik project: Financial Tracker</p>
          <div>
            <a href="/items" className="btn btn-primary me-2">
              Lihat Items
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}