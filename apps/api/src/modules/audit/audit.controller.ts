import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { AuditService } from './audit.service';
@Controller('audit')
@UseGuards(AuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class AuditController { constructor(private readonly service: AuditService) {} @Get() list(@Query('entityType') entityType?: string) { return this.service.list(entityType); } }
