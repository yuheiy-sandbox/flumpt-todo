'use strict';
import React from 'react';
import {Component} from 'flumpt';
import Header from './header';
import TodoItem from './todoItem';

export default class TodoApp extends Component {
  render() {
    const {showing, todos} = this.props;
    let showingTodos;

    switch (showing) {
      case 'all':
        showingTodos = todos;
        break;
      case 'active':
        showingTodos = todos.filter(todo => !todo.completed);
        break
      case 'completed':
        showingTodos = todos.filter(todo => todo.completed);
        break;
    }

    return (
      <div>
        <Header showing={showing} />

        <ul className="todos">
          {showingTodos.map(todo =>
            <TodoItem
              key={todo.id}
              todo={todo} />
          )}
        </ul>
      </div>
    );
  }
}
