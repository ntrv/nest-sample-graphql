import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public overview: string;

    @Column()
    public priority: number;

    @Column()
    public deadline: Date;
}
