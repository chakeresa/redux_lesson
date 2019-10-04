import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.target.classList.toggle('completed');
  };

  render() {
    return <li onClick={this.handleClick}>{this.props.todo}</li>;
  }
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
