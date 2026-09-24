import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { HubsModule } from './modules/hubs/hubs.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { AccessModule } from './modules/access/access.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { ModerationModule } from './modules/moderation/moderation.module';
import { AuditModule } from './modules/audit/audit.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { HealthModule } from './modules/health/health.module';
import { ChannelsModule } from './modules/channels/channels.module';

@Module({
  imports: [PrismaModule, UsersModule, HubsModule, QuizzesModule, AccessModule, AuthModule, AdminModule, ModerationModule, AuditModule, NotificationsModule, HealthModule, ChannelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
