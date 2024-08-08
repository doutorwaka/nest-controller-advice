import { DomainException } from 'src/domain/exceptions/domain.exception';
import { ExceptionHandler } from './exception.handler';
import { DomainExceptionHandler } from './handlers/domain.exception.handler';
import { Injectable } from '@nestjs/common';
import { BusinessException } from 'src/domain/exceptions/business.exception';
import { BusinessExceptionHandler } from './handlers/business.exception.handler';

@Injectable()
export class ControllerAdvice {
  private handlers: Map<string, ExceptionHandler<Error>>;

  constructor() {
    this.handlers = new Map();

    this.registerHandlers();
  }

  private registerHandlers(): void {
    this.handlers.set(DomainException.name, new DomainExceptionHandler());
    this.handlers.set(BusinessException.name, new BusinessExceptionHandler());
  }

  public handle(exception: Error): void {
    const handler = this.handlers.get(exception.name);

    if (handler) {
      handler.handle(exception);
    } else {
      console.log(`No handler found for exception ${exception.name}`);
    }
  }
}
