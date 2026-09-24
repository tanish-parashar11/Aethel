import { CanActivate, ExecutionContext, Injectable, TooManyRequestsException } from '@nestjs/common';
const hits = new Map<string, { count: number; expires: number }>();
@Injectable()
export class RateLimitGuard implements CanActivate { canActivate(context: ExecutionContext) { const request = context.switchToHttp().getRequest(); const key = request.ip || 'unknown'; const now = Date.now(); const item = hits.get(key); if (!item || item.expires < now) { hits.set(key, { count: 1, expires: now + 60000 }); return true; } item.count += 1; if (item.count > 120) throw new TooManyRequestsException('Rate limit exceeded'); return true; } }
