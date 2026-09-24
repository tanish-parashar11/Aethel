import { IsString } from 'class-validator';
export class CreateReportDto { @IsString() reporterId!: string; @IsString() targetType!: string; @IsString() targetId!: string; @IsString() reason!: string; @IsString() details!: string; }
