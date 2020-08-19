export namespace Todo {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public title: string){}
  }

  export class Remove {
    static readonly type = '[Todo] Remove';
    constructor(public id: string){}
  }

  export class SetCompleted {
    static readonly type = '[Todo] Set Completed';
    constructor(public id: string, public isCompleted: boolean){}
  }
}