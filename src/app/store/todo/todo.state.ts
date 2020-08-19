import { State, Selector, Action, StateContext } from 'ngxs/store';
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
  static completed(state: TodoModel[] ) {
    return state.filter( ({isCompelted}: TodoModel) => isCompelted)
  }

  @Selector() 
  static uncompleted(state: TodoModel[]) {
    return state.filter( ({isCompelted}: TodoModel) => !isCompelted)
  }

  @Action(Todo.Add)
  add(ctx: StateContext, {title}: Todo.Add) {
    const {todos} = ctx.getState();

    ctx.patchState({
      todos: todos.concat({
        id: todos.length + 1,
        title,
        isCompleted: false
      })
    })
  }

  @Action(Todo.Remove)
  remove(ctx: StateContext, {id}: Todo.Remove) {
    const {todos} = ctx.getState();

    ctx.patchState({
      todos: todos.filter((todo: TodoModel) => todo.id !== id)
    })
  }

  @Action(Todo.SetCompleted)
  setCompleted(ctx: StateContext, {id, isCompelted}: Todo.SetCompleted) {
    const {todos} = ctx.getState();

    ctx.patchState({
      todos: todos.map( (todo: TodoModel) => todo.id === id ? {
        ...todo,
        isCompelted
      }: todo)
    })
  }
}