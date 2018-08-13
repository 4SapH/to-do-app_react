import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

import './ToDoList.css';

class ToDoList extends Component {
  // renderGreetings() {
  //   return this.state.greetings.map(name => (
  //     <HelloWorld
  //       key={name}
  //       name={name}
  //       removeGreeting={this.removeGreeting}
  //     />
  //   ));
  // }
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }
  renderTodos() {
    return this.props.todos.map(todo => (
      <ToDoItem
        key={todo.key}
        id={todo.key}
        text={todo.text}
        removeTodo={this.removeTodo}
      />
    ));
  }
  removeTodo(removedTodoKey) {
    this.props.removeTodo(removedTodoKey);
    //return this.props.todos.filter((todo) => (todo !== removedTodo));
  }
  render() {
    // console.log('toDoList:',this.props.todos);
    return (
      <div className="ToDoList">
        {this.renderTodos()}
      </div>
    );
  }
}

export default ToDoList;
