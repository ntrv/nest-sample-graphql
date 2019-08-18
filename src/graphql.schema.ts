
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class AddTaskInput {
    overview?: string;
    priority?: number;
    deadline?: DateTime;
}

export class Hello {
    message?: string;
}

export abstract class IMutation {
    abstract addTask(addTaskInput?: AddTaskInput): Task | Promise<Task>;

    abstract deleteTask(id: string): Task | Promise<Task>;
}

export abstract class IQuery {
    abstract hello(name?: string): Hello | Promise<Hello>;

    abstract findTaskById(id?: string): Task | Promise<Task>;
}

export class Task {
    id: string;
    overview?: string;
    priority?: number;
    deadline?: DateTime;
}

export type DateTime = any;
