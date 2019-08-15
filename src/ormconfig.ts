import { ConnectionOptions } from 'typeorm';
import { ConfigService } from './config/config.service';

const config = new ConfigService(process.env.NODE_ENV);

export const ormConfig: ConnectionOptions = {
  type: config.getOrFail('DB_CONNECTION') as any,
  host: config.getOrFail('DB_HOST'),
  port: parseInt(config.get('DB_PORT')) || 3306,
  username: config.get('DB_USERNAME'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  logger: 'file',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
