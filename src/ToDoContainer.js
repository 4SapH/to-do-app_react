import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

import './ToDoContainer.css';

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(newTodoText, newTodoKey) {
    this.setState({
      todos: [...this.state.todos,
        { text: newTodoText, key: newTodoKey }
      ]
    });
  }
  removeTodo(removedTodoKey) {
    let filteredTodos = this.state.todos.filter(todo => todo.key !== removedTodoKey);
    // console.log('removed:',removedTodoKey);
    this.setState({ todos: filteredTodos });
  }
  render() {
    // console.log('ToDoContainer:',this.state.todos);
    return (
      <div className="ToDoContainer">
        <ToDoForm addTodo={this.addTodo} />
        <ToDoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default ToDoContainer;
