import { notFound } from 'next/navigation';
import { fallbackHubs, fallbackQuizzes, fetchJson } from '@/lib/data';

async function getHubData(slug: string) {
  const hubPayload = await fetchJson<{ hub?: (typeof fallbackHubs)[number] | null }>(`/hubs/${slug}`);
  const quizPayload = await fetchJson<{ quiz?: (typeof fallbackQuizzes)[number] | null }>(`/quizzes/${slug}`);

  let hub = hubPayload?.hub ?? null;
  let quiz = quizPayload?.quiz ?? null;

  if (!hub) {
    hub = fallbackHubs.find((item) => item.slug === slug) ?? null;
  }

  if (!quiz) {
    quiz = fallbackQuizzes.find((item) => item.hubSlug === slug) ?? null;
  }

  return { hub, quiz };
}

export default async function HubDetailPage({ params }: { params: { slug: string } }) {
  const { hub, quiz } = await getHubData(params.slug);

  if (!hub) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="section-heading">
        <span className="eyebrow">Community</span>
        <h2>{hub.name}</h2>
      </section>

      <div className="hero-card">
        <p style={{ color: '#a6b2c2', lineHeight: 1.7 }}>{hub.description}</p>
        <div className="stat-grid" style={{ marginTop: 20 }}>
          <div>
            <strong>{hub.members}</strong>
            <span>members</span>
          </div>
          <div>
            <strong>{hub.category}</strong>
            <span>category</span>
          </div>
        </div>

        <div className="cta-row" style={{ marginTop: 22 }}>
          <a className="primary-btn" href={quiz ? `/access/${hub.slug}` : '/access'}>
            {hub.verifiedRequired ? 'Take verification test' : 'Join hub'}
          </a>
          <a className="secondary-btn" href="/hubs">
            Back to hubs
          </a>
        </div>
      </div>
    </main>
  );
}
