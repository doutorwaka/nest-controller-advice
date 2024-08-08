import { BusinessException } from '../exceptions/business.exception';

export class User {
  public static create() {
    // O que aconteceu? Onde aconteceu?
    throw new BusinessException(
      `User name not valid while creating a new user`,
    );
  }
}
