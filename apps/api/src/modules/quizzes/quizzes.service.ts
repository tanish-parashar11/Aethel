import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { SubmitQuizDto } from './dto/submit-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(private readonly prisma: PrismaService) {}

  getForHub(slug: string) {
    return this.prisma.quiz.findFirst({ where: { hub: { slug } }, include: { questions: { select: { id: true, prompt: true, options: true } } } });
  }

  async submit(dto: SubmitQuizDto) {
    const quiz = await this.prisma.quiz.findFirst({ where: { hub: { slug: dto.hubSlug } }, include: { questions: true, hub: true } });
    if (!quiz) throw new NotFoundException('Quiz not found for this hub');
    let score = 0;
    quiz.questions.forEach((question, index) => { if (dto.answers[index] === question.correctIndex) score += 1; });
    const passed = score >= quiz.passScore;
    const attempt = await this.prisma.quizAttempt.create({ data: { userId: dto.userId, quizId: quiz.id, answers: dto.answers, score, status: passed ? 'PASSED' : 'FAILED' } });
    if (passed) await this.prisma.accessGrant.upsert({ where: { userId_hubId: { userId: dto.userId, hubId: quiz.hubId } }, create: { userId: dto.userId, hubId: quiz.hubId }, update: { status: 'PASSED', revokedAt: null } });
    return { attemptId: attempt.id, hubSlug: dto.hubSlug, score, totalQuestions: quiz.questions.length, passScore: quiz.passScore, passed, accessGranted: passed };
  }
}
