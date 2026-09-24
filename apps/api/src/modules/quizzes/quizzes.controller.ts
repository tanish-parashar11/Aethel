import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Get()
  getQuizzes() {
    return this.quizzesService.getQuizzes();
  }

  @Get(':hubSlug')
  getQuizForHub(@Param('hubSlug') string) {
    return this.quizzesService.getQuizForHub(hubSlug);
  }

  @Post('submit')
  submitQuiz(@Body() payload: { hubSlug: string; answers: number[] }) {
    return this.quizzesService.submitQuiz(payload.hubSlug, payload.answers);
  }
}
