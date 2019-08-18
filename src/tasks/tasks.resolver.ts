import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { AddTaskInput } from './task.input';

@Resolver('Tasks')
export class TasksResolver {
    constructor(private readonly tasksService: TasksService) {}

    @Query('findTaskById')
    async findTaskById(@Args('id') id: string): Promise<Task> {
        return this.tasksService.findOneById(id);
    }

    @Mutation('addTask')
    async create(@Args() args: AddTaskInput): Promise<Task> {
        return await this.tasksService.create(args);
    }
}
