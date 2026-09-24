import { IsEmail, IsOptional, IsString } from 'class-validator';
export class TokenDto { @IsString() token!: string; @IsOptional() @IsEmail() email?: string; }
