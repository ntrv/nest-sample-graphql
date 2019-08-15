import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class HelloService {
  constructor(private readonly config: ConfigService){}

  getHello(): string {
    return 'Hello World!';
  }

  getDBUser(): string {
    return this.config.get('DB_USER');
  }
}
