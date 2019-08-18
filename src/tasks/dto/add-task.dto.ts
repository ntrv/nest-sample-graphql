import { AddTaskInput } from '../../graphql.schema';

export class AddTaskDto extends AddTaskInput {
    id: string;
}
