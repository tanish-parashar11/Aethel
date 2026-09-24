import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
@Injectable()
export class OptionalAuthGuard implements CanActivate { canActivate(_context: ExecutionContext) { return true; } }
