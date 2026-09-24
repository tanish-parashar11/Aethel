export default function HubsPage() {
  const hubs = [
    {
      name: 'Mathematics',
      description: 'Proofs, Olympiad prep, and advanced problem solving.',
      status: 'Verified access required',
    },
    {
      name: 'Software Engineering',
      description: 'Projects, system design, internships, and technical discussion.',
      status: 'Verified access required',
    },
    {
      name: 'Public Speaking',
      description: 'Debates, speech drills, and storytelling practice.',
      status: 'Open community',
    },
  ];

  return (
    <main className="page-shell">
      <section className="section-heading">
        <span className="eyebrow">Student communities</span>
        <h2>Browse college hubs</h2>
      </section>

      <div className="feature-grid">
        {hubs.map((hub) => (
          <article key={hub.name} className="feature-card">
            <h3>{hub.name}</h3>
            <p>{hub.description}</p>
            <div className="hub-pill" style={{ marginTop: 16 }}>{hub.status}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
