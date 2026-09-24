import { IsArray, IsInt, IsString, Min } from 'class-validator';
export class CreateQuizDto { @IsString() title!: string; @IsInt() @Min(1) passScore!: number; @IsArray() questions!: { prompt: string; options: string[]; correctIndex: number }[]; }
