import { ConnectionOptions } from 'typeorm';
import { ConfigService } from './config/config.service';
import { join } from 'path';

const config = new ConfigService(process.env.NODE_ENV);

export const ormConfig: ConnectionOptions = {
  type: config.getOrFail('DB_CONNECTION') as any,
  host: config.getOrFail('DB_HOST'),
  port: parseInt(config.get('DB_PORT'), 10) || 3306,
  username: config.get('DB_USERNAME'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  entities: [join(__dirname, './**/*.entity{.ts,.js}')],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  logger: 'file',
  migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: join(__dirname, '../migrations'),
  },
};
