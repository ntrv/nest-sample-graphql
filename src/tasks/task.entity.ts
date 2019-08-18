import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { MinLength } from "class-validator";

@Entity()
export class Task extends BaseEntity {
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
