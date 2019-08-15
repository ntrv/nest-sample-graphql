import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ConfigNotFoundException } from '../exceptions/config';

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    get(key: string): string {
        if (this.envConfig[key] !== undefined) {
            return this.envConfig[key];
        } else {
            throw new ConfigNotFoundException('');
        }
    }
}