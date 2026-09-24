import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { HubsModule } from './modules/hubs/hubs.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { AccessModule } from './modules/access/access.module';

@Module({
  imports: [PrismaModule, UsersModule, HubsModule, QuizzesModule, AccessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
