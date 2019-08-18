import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { HelloModule } from './hello/hello.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './ormconfig';
import { Task } from './tasks/task.entity'

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true
    }),
    TypeOrmModule.forRoot({
      ...ormConfig,
      entities: [Task],
    }),
    HelloModule,
    TasksModule,
  ],
})
export class AppModule {}
