import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ConfigModule } from '../config/config.module';
import { HelloResolver } from './hello.resolver';

@Module({
  imports: [ConfigModule],
  providers: [HelloService, HelloResolver],
})
export class HelloModule {}
