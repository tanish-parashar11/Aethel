import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { status: string; app: string; version: string; features: string[] } {
    return {
      status: 'ok',
      app: 'Aneis API',
      version: '0.1.0',
      features: ['auth', 'hubs', 'quizzes', 'feed', 'dm'],
    };
  }
}
