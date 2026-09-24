export type QuizQuestion = {
  prompt: string;
  options: string[];
  correctIndex: number;
};

export type Quiz = {
  hubSlug: string;
  title: string;
  passScore: number;
  questions: QuizQuestion[];
};

export class QuizzesService {
  private quizzes: Quiz[] = [
    {
      hubSlug: 'mathematics',
      title: 'Mathematics Readiness Test',
      passScore: 3,
      questions: [
        {
          prompt: 'What is 12 + 8?',
          options: ['18', '20', '24', '16'],
          correctIndex: 1,
        },
        {
          prompt: 'Which number is prime?',
          options: ['9', '15', '17', '21'],
          correctIndex: 2,
        },
        {
          prompt: 'Solve: 7 * 6',
          options: ['42', '36', '48', '54'],
          correctIndex: 0,
        },
      ],
    },
    {
      hubSlug: 'software-engineering',
      title: 'Engineering Fundamentals Quiz',
      passScore: 2,
      questions: [
        {
          prompt: 'What is a REST API usually used for?',
          options: ['Database storage', 'Web communication', 'Video compression', 'Hardware logic'],
          correctIndex: 1,
        },
        {
          prompt: 'Which is a common frontend framework?',
          options: ['Docker', 'Next.js', 'Redis', 'PostgreSQL'],
          correctIndex: 1,
        },
        {
          prompt: 'What does HTML structure?',
          options: ['Code execution', 'Page content', 'Database schema', 'Networking'],
          correctIndex: 1,
        },
      ],
    },
  ];

  getQuizzes() {
    return { quizzes: this.quizzes };
  }

  getQuizForHub(hubSlug: string) {
    return this.quizzes.find((quiz) => quiz.hubSlug === hubSlug) ?? null;
  }

  submitQuiz(hubSlug: string, answers: number[]) {
    const quiz = this.getQuizForHub(hubSlug);

    if (!quiz) {
      return { message: 'No quiz found for this hub' };
    }

    let score = 0;

    for (let index = 0; index < quiz.questions.length; index += 1) {
      const answer = answers[index];
      if (answer === quiz.questions[index].correctIndex) {
        score += 1;
      }
    }

    const passed = score >= quiz.passScore;

    return {
      hubSlug,
      score,
      totalQuestions: quiz.questions.length,
      passed,
      passScore: quiz.passScore,
      accessGranted: passed,
      message: passed ? 'Access granted to hub.' : 'Access denied. Try again later.',
    };
  }
}
