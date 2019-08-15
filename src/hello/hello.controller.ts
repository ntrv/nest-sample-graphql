import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloResponse } from './hello.interface';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): HelloResponse {
    return {
      message: this.helloService.getHello(),
      now: new Date(),
    };
  }
}