import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Hello } from '../graphql.schema';

@Injectable()
export class HelloService {
  constructor(private readonly config: ConfigService) {}

  getHello(name: string): Hello {
    return {
      message: name == "" ? 'Hello World!' : `Hello ${name}!`,
    };
  }

  getDBUser(): string {
    return this.config.get('DB_USER');
  }
}
