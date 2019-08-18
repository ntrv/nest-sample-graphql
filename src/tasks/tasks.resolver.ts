import { Resolver, Args, Query } from '@nestjs/graphql';
import { Task } from '../graphql.schema';
import { TasksService } from './tasks.service';

@Resolver('Tasks')
export class TasksResolver {
    constructor(private readonly tasksService: TasksService) {}

    @Query('findTaskById')
    async findTaskById(@Args('id') id: string): Promise<Task> {
        return this.tasksService.findTaskById(id);
    }
}
