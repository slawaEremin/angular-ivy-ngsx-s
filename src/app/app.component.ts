import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from './store/todo/todo.actions';
import { TodoState } from './store/todo/todo.state';
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

  @Select(TodoState.completed) completed$: Observable<TodoModel[]>;
  @Select(TodoState.uncompleted) uncompleted$: Observable<TodoModel[]>;

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
