export default function LoginPage() {
  return (
    <main className="page-shell">
      <section className="hero" style={{ gridTemplateColumns: '1fr', maxWidth: 700, margin: '0 auto' }}>
        <div className="hero-card">
          <span className="eyebrow">Welcome back</span>
          <h2 style={{ marginTop: 0 }}>Sign in to Aneis</h2>
          <div className="cta-row" style={{ flexDirection: 'column' }}>
            <a href="/" className="primary-btn">Continue with SSO</a>
            <a href="/hubs" className="secondary-btn">Browse hubs</a>
          </div>
        </div>
      </section>
    </main>
  );
}
