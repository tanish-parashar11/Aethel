import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubmitQuizDto } from './dto/submit-quiz.dto';
import { QuizzesService } from './quizzes.service';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}
  @Get(':hubSlug') getForHub(@Param('hubSlug') hubSlug: string) { return this.quizzesService.getForHub(hubSlug); }
  @Post('submit') submit(@Body() dto: SubmitQuizDto) { return this.quizzesService.submit(dto); }
}
