import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from './domain/entities/user';

@Injectable()
export class AppService {
  getHello(): string {
    User.create();
    return 'Olá Doutor Waka!';
  }
}
