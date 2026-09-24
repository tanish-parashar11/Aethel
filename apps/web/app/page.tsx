const featureCards = [
  {
    title: 'College hubs',
    text: 'Topic-based communities built around real student interests and disciplines.',
  },
  {
    title: 'Verified entry',
    text: 'Admins can require eligibility checks before granting access to sensitive channels.',
  },
  {
    title: 'Public timeline',
    text: 'Open discovery feed inspired by decentralized social patterns and community activity.',
  },
  {
    title: 'Private DMs',
    text: 'Secure peer-to-peer communication designed for private student networking.',
  },
];

const hubExamples = ['Mathematics', 'Software', 'Public Speaking', 'Research', 'Design', 'Clubs'];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Verified communities for students</span>
          <h1>Where access is earned and knowledge is shared.</h1>
          <p>
            Aneis helps students discover organized communities, join relevant hubs, and participate in
            spaces that are gated by trust, skill, and intent.
          </p>
          <div className="cta-row">
            <a href="#features" className="primary-btn">Explore platform</a>
            <a href="#hubs" className="secondary-btn">View hubs</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="mini-label">Live community map</div>
          <div className="pulse-card">
            <div className="pulse-dot" />
            <span>12 active hubs</span>
          </div>
          <div className="stat-grid">
            <div>
              <strong>26k</strong>
              <span>student profiles</span>
            </div>
            <div>
              <strong>340</strong>
              <span>live discussions</span>
            </div>
            <div>
              <strong>64%</strong>
              <span>verified entry rate</span>
            </div>
            <div>
              <strong>2.4x</strong>
              <span>engagement uplift</span>
            </div>
          </div>
        </div>
      </section>

      <section id="hubs" className="hub-section">
        <div className="section-heading">
          <span className="eyebrow">Core hubs</span>
          <h2>Structured spaces for focused student communities</h2>
        </div>
        <div className="hub-list">
          {hubExamples.map((hub) => (
            <div key={hub} className="hub-pill">
              {hub}
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="feature-section">
        <div className="section-heading">
          <span className="eyebrow">Platform features</span>
          <h2>Built for trust, discovery, and movement</h2>
        </div>
        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
