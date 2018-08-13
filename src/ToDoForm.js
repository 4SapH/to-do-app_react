import React, { Component } from 'react';

import './ToDoForm.css';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todoKey: Date.now()
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  handleUpdate(event) {
    this.setState({ todoText: event.target.value });
  }
  addTodo() {
    if (this.state.todoText.trim())
      this.props.addTodo(this.state.todoText, this.state.todoKey);
    this.setState({ todoText: '', todoKey: Date.now() });
  }
  render() {
    return (
      <div className="ToDoForm">
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.todoText}
          size="60"
        />
        <button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}

export default ToDoForm;
