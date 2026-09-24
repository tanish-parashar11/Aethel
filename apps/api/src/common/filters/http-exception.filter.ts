import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter { catch(error: unknown, host: ArgumentsHost) { const response = host.switchToHttp().getResponse(); const status = error instanceof HttpException ? error.getStatus() : 500; const message = error instanceof HttpException ? error.getResponse() : 'Internal server error'; response.status(status).json({ statusCode: status, message, timestamp: new Date().toISOString() }); } }
