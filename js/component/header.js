'use strict';
import React from 'react';
import {Component} from 'flumpt';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {newTodo: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleChange(evt) {
    this.setState({newTodo: evt.target.value});
  }
  handleKeyDown(evt) {
    if (evt.key !== 'Enter') {return;}
    evt.preventDefault();

    const val = this.state.newTodo.trim();

    if (val) {
      this.dispatch('create', val);
      this.setState({newTodo: ''});
    }
  }
  render() {
    const {showing} = this.props;
    const {newTodo} = this.state;

    return (
      <header>
        <h1>Todo App</h1>

        <nav>
          <ul className="filters">
            {['all', 'active', 'completed'].map((item, i) =>
              <li
                key={i}
                className={showing === item ? 'is-active' : null}>
                <span onClick={() => this.dispatch('change', item)}>
                  {item}
                </span>
              </li>
            )}
          </ul>
        </nav>

        <p>
          <input
            type="text"
            value={newTodo}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange} />
        </p>
      </header>
    );
  }
}
