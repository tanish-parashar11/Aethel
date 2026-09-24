import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
@Injectable()
export class RequestIdMiddleware implements NestMiddleware { use(request: any, response: any, next: () => void) { const id = request.headers['x-request-id'] || randomUUID(); request.requestId = id; response.setHeader('x-request-id', id); next(); } }
