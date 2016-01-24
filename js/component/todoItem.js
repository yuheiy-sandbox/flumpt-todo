'use strict';
import React from 'react';
import {Component} from 'flumpt';

export default class TodoItem extends Component {
  render() {
    const {todo} = this.props;

    return (
      <li key={todo.id}>
        <button onClick={() => this.dispatch('toggle', todo.id)}>
          {todo.completed ? 'clear' : 'complete'}
        </button>

        <button onClick={() => this.dispatch('destory', todo.id)}>
          delete
        </button>

        <span className={todo.completed ? null : 'is-active'}>
          {' ' + todo.body}
        </span>
      </li>
    );
  }
}
