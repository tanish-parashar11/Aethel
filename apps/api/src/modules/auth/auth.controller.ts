import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController { constructor(private readonly service: AuthService) {} @Get('me') @UseGuards(AuthGuard) me(@CurrentUser() user: any) { return this.service.me(user); } }
