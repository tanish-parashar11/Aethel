export const fallbackHubs = [
  {
    id: 'hub_1',
    name: 'Mathematics',
    slug: 'mathematics',
    category: 'STEM',
    description: 'Advanced problem solving, olympiad prep, and proofs.',
    members: 1234,
    verifiedRequired: true,
  },
  {
    id: 'hub_2',
    name: 'Software Engineering',
    slug: 'software-engineering',
    category: 'STEM',
    description: 'Projects, internships, and system design discussions.',
    members: 2456,
    verifiedRequired: true,
  },
  {
    id: 'hub_3',
    name: 'Public Speaking',
    slug: 'public-speaking',
    category: 'Communication',
    description: 'Debate, communication, storytelling, and speaking practice.',
    members: 980,
    verifiedRequired: false,
  },
];

export const fallbackQuizzes = [
  {
    hubSlug: 'mathematics',
    title: 'Mathematics Readiness Test',
    passScore: 3,
    questions: [
      { prompt: 'What is 12 + 8?', options: ['18', '20', '24', '16'], correctIndex: 1 },
      { prompt: 'Which number is prime?', options: ['9', '15', '17', '21'], correctIndex: 2 },
      { prompt: 'Solve: 7 * 6', options: ['42', '36', '48', '54'], correctIndex: 0 },
    ],
  },
  {
    hubSlug: 'software-engineering',
    title: 'Engineering Fundamentals Quiz',
    passScore: 2,
    questions: [
      { prompt: 'What is a REST API usually used for?', options: ['Database storage', 'Web communication', 'Video compression', 'Hardware logic'], correctIndex: 1 },
      { prompt: 'Which is a common frontend framework?', options: ['Docker', 'Next.js', 'Redis', 'PostgreSQL'], correctIndex: 1 },
      { prompt: 'What does HTML structure?', options: ['Code execution', 'Page content', 'Database schema', 'Networking'], correctIndex: 1 },
    ],
  },
];

export async function fetchJson<T>(path: string): Promise<T | null> {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  try {
    const response = await fetch(`${base}${path}`, { cache: 'no-store' });
    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}
