import { Injectable } from '@nestjs/common';
import { Task } from '../graphql.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task as TaskEntity } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>
    ) {}

    async findTaskById(id: string): Promise<Task> {
        return await {
            id: "foo",
            overview: "hello world",
            priority: 1,
            deadline: "2016-01-01T19:10:20+09:00"
        };
    }
}
