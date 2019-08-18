import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { Task } from '../graphql.schema';
import { TasksService } from './tasks.service';
import { AddTaskDto } from './dto/add-task.dto';

@Resolver('Tasks')
export class TasksResolver {
    constructor(private readonly tasksService: TasksService) {}

    @Query('findTaskById')
    async findTaskById(@Args('id') id: string): Promise<Task> {
        return this.tasksService.findTaskById(id);
    }

    @Mutation()
    async create(@Args('addTaskInput') args: AddTaskDto): Promise<Task> {
        return await this.tasksService.create(args);
    }
}
