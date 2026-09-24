import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { status: string; app: string; version: string } {
    return {
      status: 'ok',
      app: 'Aneis API',
      version: '0.1.0',
    };
  }
}
