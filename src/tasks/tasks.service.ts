import { Injectable } from '@nestjs/common';
import { Task } from '../graphql.schema';

@Injectable()
export class TasksService {
    findTaskById(id: string): Task {
        return {
            id: "foo",
            overview: "hello world",
            priority: 1,
            deadline: "2016-01-01T19:10:20+09:00"
        };
    }
}
