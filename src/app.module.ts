import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { HelloModule } from './hello/hello.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule,
    HelloModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(__dirname, './graphql.ts'),
        outputAs: 'class',
      },
      debug: true,
      playground: true
    }),
  ],
})
export class AppModule {}
