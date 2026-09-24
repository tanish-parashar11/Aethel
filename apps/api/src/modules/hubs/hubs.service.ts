import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateHubDto } from './dto/create-hub.dto';

@Injectable()
export class HubsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() { return this.prisma.hub.findMany({ include: { _count: { select: { members: true } } } }); }
  findBySlug(slug: string) { return this.prisma.hub.findUnique({ where: { slug }, include: { quizzes: true, _count: { select: { members: true } } } }); }
  create(dto: CreateHubDto) { return this.prisma.hub.create({ data: { ...dto, verifiedRequired: dto.verifiedRequired ?? true } }); }

  async join(hubId: string, userId: string) {
    return this.prisma.hubMember.upsert({
      where: { userId_hubId: { userId, hubId } },
      create: { userId, hubId },
      update: {},
    });
  }
}
