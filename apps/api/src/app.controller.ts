import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): { status: string; app: string; version: string; features: string[] } {
    return this.appService.getHealth();
  }
}
