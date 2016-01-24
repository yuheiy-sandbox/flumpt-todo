'use strict';
import React from 'react';
import {Flux} from 'flumpt';
import TodoApp from './component/todoApp';

export default class App extends Flux {
  subscribe() {
    this.on('create', body => {
      const newTodo = {
        id: Math.random().toString(28),
        body,
        completed: false
      };

      this.update(state => {
        state.todos.push(newTodo);
        return Object.assign({}, state);
      });
    });

    this.on('toggle', id => {
      this.update(state => {
        const newTodos = state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        state.todos = newTodos;
        return Object.assign({}, state);
      });
    });

    this.on('destory', id => {
      this.update(state => {
        const newTodos = state.todos.filter(todo => todo.id !== id);
        state.todos = newTodos;
        return Object.assign({}, state);
      });
    });

    this.on('change', item => {
      this.update(state => {
        state.showing = item;
        return Object.assign({}, state);
      });
    })
  }
  render(state) {
    return <TodoApp {...state} />;
  }
}
