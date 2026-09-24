import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const ApiUser = createParamDecorator((_data: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().user ?? null);
