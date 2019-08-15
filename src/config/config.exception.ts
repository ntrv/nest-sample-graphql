import { InternalServerErrorException } from "@nestjs/common";

export class ConfigNotFoundException extends InternalServerErrorException {
    public readonly name = 'ConfigNotFoundException';

    constructor(public message: string) {
        super(message);
    }

  toString() {
    return this.name + ': ' + this.message;
  }
}