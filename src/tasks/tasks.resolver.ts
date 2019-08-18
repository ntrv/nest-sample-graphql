import { NotFoundException } from '@nestjs/common';
import { Resolver, Args, Query, Mutation, Subscription } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { AddTaskInput } from './task.input';
import { RedisPubSub } from 'graphql-redis-subscriptions';

const pubsub = new RedisPubSub();

@Resolver(of => Task)
export class TasksResolver {
    constructor(private readonly tasksService: TasksService) {}

    @Query(returns => Task)
    async findTaskById(@Args('id') id: string): Promise<Task> {
        const task = await this.tasksService.findOneById(id);
        if (!task) throw new NotFoundException(id);
        return task;
    }

    @Mutation(returns => Task)
    async createTask(@Args('addTaskInput') args: AddTaskInput): Promise<Task> {
        const task = await this.tasksService.create(args)
        await pubsub.publish('taskAdded', {taskAdded: {
            id: task.id,
            overview: task.overview,
            priority: task.priority,
            deadline: task.deadline,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
        }});
        return task;
    }

    @Subscription(returns => Task)
    taskAdded() {
        return pubsub.asyncIterator('taskAdded');
    }
}
