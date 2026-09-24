import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateReportDto } from './dto/create-report.dto';
@Injectable()
export class ModerationService { constructor(private readonly prisma: PrismaService) {} createReport(dto: CreateReportDto) { return this.prisma.report.create({ data: dto }); } listReports() { return this.prisma.report.findMany({ orderBy: { createdAt: 'desc' } }); } resolve(id: string) { return this.prisma.report.update({ where: { id }, data: { status: 'RESOLVED' } }); } }
