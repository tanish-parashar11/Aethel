import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { ChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
@Controller('hubs/:hubId/channels')
@UseGuards(AuthGuard)
export class ChannelsController { constructor(private readonly service: ChannelsService) {} @Get() list(@Param('hubId') hubId: string) { return this.service.list(hubId); } @Post() create(@Param('hubId') hubId: string, @Body() dto: CreateChannelDto) { return this.service.create(hubId, dto); } }
