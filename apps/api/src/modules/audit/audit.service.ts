import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
@Injectable()
export class AuditService { constructor(private readonly prisma: PrismaService) {} record(data: { actorId?: string; action: string; entityType: string; entityId?: string; metadata?: object }) { return this.prisma.auditLog.create({ data }); } list(entityType?: string) { return this.prisma.auditLog.findMany({ where: entityType ? { entityType } : undefined, orderBy: { createdAt: 'desc' }, take: 100 }); } }
