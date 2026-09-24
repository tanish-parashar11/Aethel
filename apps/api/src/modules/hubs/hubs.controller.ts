import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHubDto } from './dto/create-hub.dto';
import { HubsService } from './hubs.service';

@Controller('hubs')
export class HubsController {
  constructor(private readonly hubsService: HubsService) {}
  @Get() findAll() { return this.hubsService.findAll(); }
  @Get(':slug') findOne(@Param('slug') slug: string) { return this.hubsService.findBySlug(slug); }
  @Post() create(@Body() dto: CreateHubDto) { return this.hubsService.create(dto); }
  @Post(':hubId/join/:userId') join(@Param('hubId') hubId: string, @Param('userId') userId: string) { return this.hubsService.join(hubId, userId); }
}
