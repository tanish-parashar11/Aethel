"use client";

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { fallbackHubs, fallbackQuizzes } from '@/lib/data';

function computeScore(quiz: (typeof fallbackQuizzes)[number], answers: number[]) {
  let score = 0;

  for (let index = 0; index < quiz.questions.length; index += 1) {
    if (answers[index] === quiz.questions[index].correctIndex) {
      score += 1;
    }
  }

  const passed = score >= quiz.passScore;

  return {
    score,
    passed,
    passScore: quiz.passScore,
    totalQuestions: quiz.questions.length,
    accessGranted: passed,
  };
}

export default function AccessPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? '';
  const hub = fallbackHubs.find((item) => item.slug === slug) ?? null;
  const quiz = fallbackQuizzes.find((item) => item.hubSlug === slug) ?? null;

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<
    | {
        score: number;
        passed: boolean;
        passScore: number;
        totalQuestions: number;
        accessGranted: boolean;
        message: string;
      }
    | null
  >(null);

  if (!hub || !quiz) {
    return null;
  }

  const finishedCount = Object.keys(answers).length;
  const questionCount = quiz.questions.length;

  const currentResult = useMemo(
    () => computeScore(quiz, quiz.questions.map((_, index) => answers[index] ?? -1)),
    [answers, quiz],
  );

  const handleChange = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length !== questionCount) {
      setResult({
        score: currentResult.score,
        passed: currentResult.passed,
        passScore: currentResult.passScore,
        totalQuestions: currentResult.totalQuestions,
        accessGranted: currentResult.accessGranted,
        message: 'Please answer every question before submitting.',
      });
      return;
    }

    setLoading(true);

    const answerArray = quiz.questions.map((_, index) => answers[index] ?? -1);
    const fallbackResult = computeScore(quiz, answerArray);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/quizzes/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hubSlug: slug, answers: answerArray }),
      });

      if (response.ok) {
        const payload = await response.json();
        setResult({
          score: payload.score,
          passed: payload.passed,
          passScore: payload.passScore,
          totalQuestions: payload.totalQuestions,
          accessGranted: payload.accessGranted,
          message: payload.message,
        });
      } else {
        setResult({
          score: fallbackResult.score,
          passed: fallbackResult.passed,
          passScore: fallbackResult.passScore,
          totalQuestions: fallbackResult.totalQuestions,
          accessGranted: fallbackResult.accessGranted,
          message: fallbackResult.passed ? 'Access granted to hub.' : 'Access denied. Try again later.',
        });
      }
    } catch {
      setResult({
        score: fallbackResult.score,
        passed: fallbackResult.passed,
        passScore: fallbackResult.passScore,
        totalQuestions: fallbackResult.totalQuestions,
        accessGranted: fallbackResult.accessGranted,
        message: fallbackResult.passed ? 'Access granted to hub.' : 'Access denied. Try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

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
              <p style={{ marginBottom: 10, fontWeight: 700 }}>
                {questionIndex + 1}. {question.prompt}
              </p>

              <div style={{ display: 'grid', gap: 10 }}>
                {question.options.map((option, optionIndex) => (
                  <label key={`${question.prompt}-${optionIndex}`} style={{ display: 'flex', gap: 10, color: '#dfe8f3' }}>
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      checked={answers[questionIndex] === optionIndex}
                      onChange={() => handleChange(questionIndex, optionIndex)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 10, color: '#a6b2c2' }}>
          Progress: {finishedCount}/{questionCount} answered
        </div>

        <div className="cta-row" style={{ marginTop: 22 }}>
          <button type="button" className="primary-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Checking...' : 'Submit test'}
          </button>
          <a className="secondary-btn" href={`/hubs/${hub.slug}`}>
            Back to hub
          </a>
        </div>

        {result && (
          <div
            style={{
              marginTop: 24,
              padding: 18,
              borderRadius: 12,
              background: result.passed ? 'rgba(30, 180, 110, 0.08)' : 'rgba(255, 100, 90, 0.08)',
              border: `1px solid ${result.passed ? 'rgba(30,180,110,0.4)' : 'rgba(255,100,90,0.4)'}`,
            }}
          >
            <strong style={{ display: 'block', marginBottom: 8 }}>
              {result.passed ? 'Access granted' : 'Access denied'}
            </strong>
            <div style={{ color: '#dfe8f3' }}>Score: {result.score}/{result.totalQuestions}</div>
            <div style={{ color: '#a6b2c2', marginTop: 6 }}>{result.message}</div>
          </div>
        )}
      </div>
    </main>
  );
}
