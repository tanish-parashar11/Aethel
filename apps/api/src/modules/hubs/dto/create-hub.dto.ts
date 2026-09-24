import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateHubDto {
  @IsString() @MinLength(2) name!: string;
  @IsString() @MinLength(2) slug!: string;
  @IsString() description!: string;
  @IsString() category!: string;
  @IsOptional() @IsBoolean() verifiedRequired?: boolean;
}
