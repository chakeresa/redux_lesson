import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { completed: props.completed };
  }

  handleClick = (e) => {
    this.props.toggleTodo(this.props.id);
    // e.target.classList.toggle('completed');
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
