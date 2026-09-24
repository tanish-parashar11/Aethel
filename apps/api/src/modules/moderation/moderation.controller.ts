import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { ModerationService } from './moderation.service';
import { CreateReportDto } from './dto/create-report.dto';
@Controller('moderation')
@UseGuards(AuthGuard, RolesGuard)
export class ModerationController { constructor(private readonly service: ModerationService) {} @Post('reports') create(@Body() dto: CreateReportDto) { return this.service.createReport(dto); } @Get('reports') @Roles(UserRole.ADMIN, UserRole.MODERATOR) list() { return this.service.listReports(); } @Patch('reports/:id/resolve') @Roles(UserRole.ADMIN, UserRole.MODERATOR) resolve(@Param('id') id: string) { return this.service.resolve(id); } }
