import {
    Entity,
    BaseEntity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { MinLength, IsUUID } from "class-validator";
import { Field, ObjectType, Int } from 'type-graphql';
import { ulid } from 'ulid';

@ObjectType()
@Entity({name: 'tasks'})
export class Task extends BaseEntity {
    @Field()
    @PrimaryColumn({nullable: false, default: ulid()})
    @MinLength(10)
    @IsUUID('4')
    public id: string;

    @Field()
    @Column()
    public overview: string;

    @Field(type => Int)
    @Column()
    public priority: number;

    @Field()
    @Column()
    public deadline: Date;

    @Field()
    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @Field()
    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;
}
