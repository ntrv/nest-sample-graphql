import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { MinLength } from "class-validator";

@Entity({name: 'tasks'})
export class TaskEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @MinLength(10)
    public id: string;

    @Column()
    public overview: string;

    @Column()
    public priority: number;

    @Column()
    public deadline: Date;
}
