import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { ulid } from 'ulid';
import { AddTaskInput } from './task.input';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) {}

    async findOneById(id: string): Promise<Task> {
        const task = await this.taskRepository.findOne(id);
        return task;
    }

    async create(input: AddTaskInput): Promise<Task>{
        const task = new Task();
        task.id = ulid();
        task.overview = input.overview;
        task.priority = input.priority;
        task.deadline = new Date(input.deadline);

        return await this.taskRepository.save(task);
    }
}
