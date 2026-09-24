import { Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { NotificationsService } from './notifications.service';
@Controller('notifications')
@UseGuards(AuthGuard)
export class NotificationsController { constructor(private readonly service: NotificationsService) {} @Get(':userId') list(@Param('userId') userId: string) { return this.service.list(userId); } @Patch(':id/read') read(@Param('id') id: string) { return this.service.markRead(id); } }
