import { Controller, Get, Param } from '@nestjs/common';
import { HubsService } from './hubs.service';

@Controller('hubs')
export class HubsController {
  constructor(private readonly hubsService: HubsService) {}

  @Get()
  getHubs() {
    return this.hubsService.getHubs();
  }

  @Get(':slug')
  getHub(@Param('slug') slug: string) {
    return this.hubsService.getHubBySlug(slug);
  }
}
