import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app.service';
import { ControllerAdvice } from './controller-advice/controller.advice';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly controllerAdvice: ControllerAdvice,
  ) {}

  @Get()
  getHello(): string {
    try {
      const response = this.appService.getHello();
      return response;
    } catch (error) {
      this.controllerAdvice.handle(error);
    }
  }
}
