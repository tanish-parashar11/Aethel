import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateChannelDto } from './dto/create-channel.dto';
@Injectable()
export class ChannelsService { constructor(private readonly prisma: PrismaService) {} list(hubId: string) { return this.prisma.channel.findMany({ where: { hubId }, orderBy: { createdAt: 'asc' } }); } create(hubId: string, dto: CreateChannelDto) { return this.prisma.channel.create({ data: { hubId, ...dto } }); } }
