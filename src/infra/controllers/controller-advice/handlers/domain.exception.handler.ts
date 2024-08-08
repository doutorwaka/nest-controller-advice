import { DomainException } from 'src/domain/exceptions/domain.exception';
import { ExceptionHandler } from '../exception.handler';
import { BadRequestException, Logger } from '@nestjs/common';

export class DomainExceptionHandler extends ExceptionHandler<DomainException> {
  private logger = new Logger(DomainExceptionHandler.name);

  constructor() {
    super();
  }

  public handle(exception: DomainException): void {
    this.logger.error(exception.message);
    throw new BadRequestException(
      `Alguém cometeu um erro: ${exception.message}`,
    );
  }
}
