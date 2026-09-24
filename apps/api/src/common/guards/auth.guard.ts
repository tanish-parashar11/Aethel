import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../modules/auth/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}
  canActivate(context: ExecutionContext) { const request = context.switchToHttp().getRequest(); const header = request.headers.authorization; if (!header?.startsWith('Bearer ')) throw new UnauthorizedException('Bearer token required'); request.user = this.auth.verifyToken(header.slice(7)); return true; }
}
