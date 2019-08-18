import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '../graphql.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task as TaskEntity } from './task.entity';
import { ulid } from 'ulid';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>
    ) {}

    async findOneById(id: string): Promise<Task> {
        const entity = await this.taskRepository.findOne(id);

        if (entity.hasId) {
            throw new NotFoundException('');
        }

        return Promise.resolve({
            id: entity.id,
            overview: entity.overview,
            priority: entity.priority,
            deadline: entity.deadline
        });
    }

    async create(task: Task): Promise<Task>{
        const data = {
            id: ulid(),
            overview: task.overview,
            priority: task.priority,
            deadline: task.deadline
        };

        this.taskRepository.create(data);
        return Promise.resolve(data);
    }
}
