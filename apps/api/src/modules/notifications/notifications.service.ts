import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { NotificationType } from '@prisma/client';
@Injectable()
export class NotificationsService { constructor(private readonly prisma: PrismaService) {} create(data: { userId: string; type: NotificationType; title: string; body: string }) { return this.prisma.notification.create({ data }); } list(userId: string) { return this.prisma.notification.findMany({ where: { userId }, orderBy: { createdAt: 'desc' }, take: 50 }); } markRead(id: string) { return this.prisma.notification.update({ where: { id }, data: { readAt: new Date() } }); } }
