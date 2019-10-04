import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import TodoList from '../containers/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
