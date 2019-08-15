import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Hello } from '../interfaces/hello.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Hello {
    return {
      message: this.appService.getHello(),
      now: new Date(),
    };
  }
}
