export default function AccessPage() {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <span className="eyebrow">Verified access</span>
        <h2>Eligibility gate for private communities</h2>
      </section>

      <div className="hero-card">
        <div className="mini-label">Quiz flow</div>
        <p style={{ color: '#a6b2c2', lineHeight: 1.7 }}>
          Students must complete a short knowledge check before they can access restricted hubs like
          Mathematics and Software Engineering. This is where the custom product differentiator lives.
        </p>
        <div className="cta-row">
          <a href="/hubs" className="primary-btn">View hub requirements</a>
          <a href="/login" className="secondary-btn">Back to login</a>
        </div>
      </div>
    </main>
  );
}
