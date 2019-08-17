import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { HelloModule } from './hello/hello.module';
import { join } from 'path';
import { TasksModule } from './tasks/tasks.module';
import { GraphQLDateTime } from 'graphql-iso-date';

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
      resolvers: {
        DateTime: GraphQLDateTime,
      },
      debug: true,
      playground: true
    }),
    TasksModule,
  ],
})
export class AppModule {}
