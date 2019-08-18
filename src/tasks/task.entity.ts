import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { MinLength } from "class-validator";
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({name: 'tasks'})
export class Task extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    @MinLength(10)
    public id: string;

    @Field()
    @Column()
    public overview: string;

    @Field()
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
