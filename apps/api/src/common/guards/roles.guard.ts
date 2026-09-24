import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@prisma/client';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) { const roles = this.reflector.get<UserRole[]>('roles', context.getHandler()) ?? []; if (!roles.length) return true; const user = context.switchToHttp().getRequest().user; if (!user || !roles.includes(user.role)) throw new ForbiddenException('Insufficient role'); return true; }
}
