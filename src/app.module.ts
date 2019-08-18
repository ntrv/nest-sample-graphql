import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { HelloModule } from './hello/hello.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './ormconfig';
import { Task } from './tasks/task.entity'

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        autoSchemaFile: 'schema.gql',
        installSubscriptionHandlers: true,
        debug: config.get('APP_DEBUG') == "true",
        playground: config.get('APP_DEBUG') == "true",
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot({
      ...ormConfig,
    }),
    HelloModule,
    TasksModule,
  ],
})
export class AppModule {}
