import React, { Component } from 'react';

import './ToDoItem.css';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }
  removeTodo() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    // console.log('to remove:',this.props);
    return (
      <div className="ToDoItem">
        <h1>{this.props.text}</h1>
        <button onClick={this.removeTodo}>x</button>
      </div>
    );
  }
}

export default ToDoItem;
