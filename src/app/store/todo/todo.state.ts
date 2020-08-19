import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Todo } from './todo.actions';
import { TodoModel } from '../../models';

interface TodoStateModel {
  todos: TodoModel[];
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: []
  }
})
@Injectable()
export class TodoState {
  @Selector()
  static completed(state: TodoStateModel ) {
    return state.todos.filter( ({isCompleted}: TodoModel) => isCompleted)
  }

  @Selector() 
  static uncompleted(state: TodoStateModel) {
    return state.todos.filter( ({isCompleted}: TodoModel) => !isCompleted)
  }

  @Action(Todo.Add)
  add(ctx: StateContext<TodoStateModel>, {title}: Todo.Add) {
    const {todos} = ctx.getState();


    ctx.setState({
      todos: [
        ...todos,
        {
          id: todos.length + 1 + '',
          title,
          isCompleted: false
        } as TodoModel
      ]
    })
  }

  @Action(Todo.Remove)
  remove(ctx: StateContext<TodoStateModel>, {id}: Todo.Remove) {
    const {todos} = ctx.getState();

    ctx.patchState({
      todos: todos.filter((todo: TodoModel) => todo.id !== id)
    })
  }

  @Action(Todo.SetCompleted)
  setCompleted(ctx: StateContext<TodoStateModel>, {id, isCompleted}: Todo.SetCompleted) {
    const {todos} = ctx.getState();

    ctx.patchState({
      todos: todos.map( (todo: TodoModel) => todo.id === id ? {
        ...todo,
        isCompleted
      }: todo)
    })
  }
}