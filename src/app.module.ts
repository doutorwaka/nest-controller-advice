import { Module } from '@nestjs/common';
import { AppController } from './infra/controllers/app.controller';
import { AppService } from './app.service';
import { ControllerAdvice } from './infra/controllers/controller-advice/controller.advice';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ControllerAdvice],
})
export class AppModule {}
