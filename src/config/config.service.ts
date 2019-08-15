import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
import { ConfigNotFoundException } from './config.exception';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(env: string) {
        const filePath = resolve(__dirname, `../../${env || ''}.env`)
        this.envConfig = dotenv.parse(readFileSync(filePath));
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    getOrFail(key: string): string {
        if (this.get(key) !== undefined) {
            return this.get(key);
        } else {
            throw new ConfigNotFoundException('');
        }
    }
}