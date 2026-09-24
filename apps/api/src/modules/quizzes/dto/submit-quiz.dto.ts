import { IsArray, IsInt, IsString, Min } from 'class-validator';

export class SubmitQuizDto {
  @IsString() userId!: string;
  @IsString() hubSlug!: string;
  @IsArray() @IsInt({ each: true }) @Min(0, { each: true }) answers!: number[];
}
