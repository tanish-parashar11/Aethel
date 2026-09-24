import { NotificationType } from '@prisma/client';
export type NotificationPayload = { userId: string; type: NotificationType; title: string; body: string };
