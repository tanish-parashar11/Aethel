import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
@Injectable()
export class AdminService { constructor(private readonly prisma: PrismaService) {} createQuiz(hubId: string, dto: CreateQuizDto) { return this.prisma.quiz.create({ data: { hubId, title: dto.title, passScore: dto.passScore, questions: { create: dto.questions } }, include: { questions: true } }); } reports() { return this.prisma.report.findMany({ orderBy: { createdAt: 'desc' } }); } }
