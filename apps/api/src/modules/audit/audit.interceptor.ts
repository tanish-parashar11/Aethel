import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, tap } from 'rxjs';
import { AuditService } from './audit.service';
import { AUDIT_ACTION } from './audit.decorator';
@Injectable()
export class AuditInterceptor implements NestInterceptor { constructor(private readonly reflector: Reflector, private readonly audit: AuditService) {} intercept(context: ExecutionContext, next: CallHandler): Observable<any> { const action = this.reflector.get<string>(AUDIT_ACTION, context.getHandler()); return next.handle().pipe(tap(() => { if (action) { const req = context.switchToHttp().getRequest(); void this.audit.record({ actorId: req.user?.id, action, entityType: context.getClass().name }); } })); } }
