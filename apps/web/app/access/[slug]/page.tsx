import { notFound } from 'next/navigation';
import { fallbackHubs, fallbackQuizzes, fetchJson } from '@/lib/data';

export default async function AccessPage({ params }: { params: { slug: string } }) {
  const payload = await fetchJson<{ quiz?: (typeof fallbackQuizzes)[number] | null }>(`/quizzes/${params.slug}`);
  const quiz = payload?.quiz ?? fallbackQuizzes.find((item) => item.hubSlug === params.slug) ?? null;
  const hub = fallbackHubs.find((item) => item.slug === params.slug) ?? null;

  if (!hub || !quiz) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="section-heading">
        <span className="eyebrow">Verified access</span>
        <h2>{hub.name} challenge</h2>
      </section>

      <div className="hero-card">
        <div className="mini-label">{quiz.title}</div>
        <div style={{ marginTop: 20 }}>
          {quiz.questions.map((question, questionIndex) => (
            <div key={`${hub.slug}-${questionIndex}`} style={{ marginBottom: 22 }}>
              <p style={{ marginBottom: 10, fontWeight: 700 }}>{questionIndex + 1}. {question.prompt}</p>
              <div style={{ display: 'grid', gap: 10 }}>
                {question.options.map((option, optionIndex) => (
                  <label key={`${question.prompt}-${optionIndex}`} style={{ display: 'flex', gap: 10, color: '#dfe8f3' }}>
                    <input type="radio" name={`question-${questionIndex}`} value={optionIndex} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a className="primary-btn" href="/hubs">
            Submit test
          </a>
          <a className="secondary-btn" href={`/hubs/${hub.slug}`}>
            Back to hub
          </a>
        </div>
      </div>
    </main>
  );
}
