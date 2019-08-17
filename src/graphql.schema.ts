
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Hello {
    message?: string;
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
