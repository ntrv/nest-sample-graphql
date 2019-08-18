import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public overview: string;

    @Column()
    public priority: number;

    @Column()
    public deadline: Date;
}
