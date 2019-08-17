
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
}
