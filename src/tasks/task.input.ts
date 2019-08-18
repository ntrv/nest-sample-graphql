import { Field, InputType} from 'type-graphql';

@InputType()
export class AddTaskInput {
    @Field()
    overview?: string;

    @Field()
    priority?: number;

    @Field()
    deadline?: string;
}