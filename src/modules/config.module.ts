import { Module } from '@nestjs/common';
import { ConfigService } from '../services/config.service';
import * as path from 'path';

@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService(path.resolve(__dirname, `../../${process.env.NODE_ENV || ''}.env`)),
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule {}