import { Resolver, Args, Query } from '@nestjs/graphql';
import { HelloService } from './hello.service';
import { Hello } from '../graphql.schema';

@Resolver('Hello')
export class HelloResolver {
    constructor(private readonly helloService: HelloService) {}

    @Query()
    async hello(@Args('name') name: string): Promise<Hello> {
        return await this.helloService.getHello(name);
    }
}
