import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
@Injectable()
export class HealthService { constructor(private readonly prisma: PrismaService) {} async check() { let database = 'ok'; try { await this.prisma.$queryRaw`SELECT 1`; } catch { database = 'unavailable'; } return { status: database === 'ok' ? 'ok' : 'degraded', database, timestamp: new Date().toISOString() }; } }
