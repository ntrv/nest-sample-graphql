import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ConfigNotFoundException } from '../exceptions/config';

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
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