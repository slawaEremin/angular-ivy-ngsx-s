export namespace Todo {
  export class Add {
    readonly type = '[Todo] Add';
    constructor(private title: string){}
  }

  export class Remove {
    readonly type = '[Todo] Remove';
    constructor(private id: string){}
  }

  export class SetCompleted {
    readonly type = '[Todo] Set Completed';
    constructor(private id: string, private isCompleted: boolean){}
  }
}