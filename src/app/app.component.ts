import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Store, Select } from 'ngxs/store';
import { Todo } from './store/actions';
import { TodoState } from './store/state';
import { TodoModel } from './models';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {

  @ViewChild('todoTitleInput') todoTitleInput: ElementRef;

  // optimization, rerenders only todos that change instead of the entire list of todos
  todosTrackFn = (i, todo) => todo.id;

  @Select(TodoState.completed) completed$: TodoModel[];
  @Select(TodoState.uncompleted) uncompleted$: TodoModel[];

  constructor(
    public store: Store
    ) {}

  onAddTodo(title: string){
    this.store.dispatch(new Todo.Add(title));
  }

  remove(id: string): void {
    this.store.dispatch(new Todo.Remove(id));
  }

  setCompleted(id: string, isCompleted): void {
        this.store.dispatch(new Todo.SetCompleted(id, isCompleted));
  }
}
