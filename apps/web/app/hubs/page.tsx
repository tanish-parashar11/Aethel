import { fallbackHubs, fetchJson } from '@/lib/data';

export default async function HubsPage() {
  const data = await fetchJson<{ hubs: typeof fallbackHubs }>('/hubs');
  const hubs = data?.hubs ?? fallbackHubs;

  return (
    <main className="page-shell">
      <section className="section-heading">
        <span className="eyebrow">Student communities</span>
        <h2>Browse college hubs</h2>
      </section>

      <div className="feature-grid">
        {hubs.map((hub) => (
          <article key={hub.slug} className="feature-card">
            <h3>{hub.name}</h3>
            <p>{hub.description}</p>
            <div className="hub-pill" style={{ marginTop: 16 }}>
              {hub.verifiedRequired ? 'Verified access required' : 'Open community'}
            </div>
            <div style={{ marginTop: 18 }}>
              <a className="secondary-btn" href={`/hubs/${hub.slug}`}>
                View hub
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
