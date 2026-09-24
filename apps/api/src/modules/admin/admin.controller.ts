import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { AdminService } from './admin.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
@Controller('admin')
@UseGuards(AuthGuard, RolesGuard)
@Roles(UserRole.ADMIN, UserRole.MODERATOR)
export class AdminController { constructor(private readonly service: AdminService) {} @Post('hubs/:hubId/quizzes') createQuiz(@Param('hubId') hubId: string, @Body() dto: CreateQuizDto) { return this.service.createQuiz(hubId, dto); } @Get('reports') reports() { return this.service.reports(); } }
