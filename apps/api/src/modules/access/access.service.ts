import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AccessService {
  constructor(private readonly prisma: PrismaService) {}

  async status(userId: string, hubId: string) {
    const grant = await this.prisma.accessGrant.findUnique({ where: { userId_hubId: { userId, hubId } } });
    return { userId, hubId, accessGranted: grant?.status === 'PASSED', status: grant?.status ?? 'PENDING', grant };
  }
}
