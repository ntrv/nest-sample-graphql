import { Resolver, Args, Query } from '@nestjs/graphql';
import { HelloService } from './hello.service';
import { Hello } from '../graphql.schema';

@Resolver('Hello')
export class HelloResolver {
    constructor(private readonly helloService: HelloService) {}

    @Query('hello')
    async getHello(@Args('name') name: string): Promise<Hello> {
        return await this.helloService.getHello(name);
    }
}
