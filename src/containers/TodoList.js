import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  const displayTodos = todos.map((todo) => {
    return <Todo {...todo} key={todo.id} />;
  });

  return <ul>{displayTodos}</ul>;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
