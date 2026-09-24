import { Controller, Get, Param } from '@nestjs/common';
import { AccessService } from './access.service';

@Controller('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}
  @Get(':userId/:hubId') status(@Param('userId') userId: string, @Param('hubId') hubId: string) { return this.accessService.status(userId, hubId); }
}
