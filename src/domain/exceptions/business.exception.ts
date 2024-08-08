import { DomainException } from './domain.exception';

export class BusinessException extends DomainException {
  constructor(message: string) {
    super(message);
    this.name = BusinessException.name;
  }
}
