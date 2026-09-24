import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { HubsModule } from './modules/hubs/hubs.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';

@Module({
  imports: [UsersModule, HubsModule, QuizzesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
