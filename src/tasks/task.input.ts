import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class AddTaskInput {
    @Field()
    overview?: string;

    @Field(type => Int)
    priority?: number;

    @Field()
    deadline?: string;
}