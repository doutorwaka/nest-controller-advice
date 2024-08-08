import { BusinessException } from 'src/domain/exceptions/business.exception';
import { ExceptionHandler } from '../exception.handler';
import { Logger, NotFoundException } from '@nestjs/common';

export class BusinessExceptionHandler extends ExceptionHandler<BusinessException> {
  private logger = new Logger(BusinessExceptionHandler.name);

  constructor() {
    super();
  }

  public handle(exception: BusinessException): void {
    this.logger.error(exception.message);
    throw new NotFoundException(`Não encontramos o que você procurou!`);
  }
}
