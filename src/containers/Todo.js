import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class Todo extends Component {
  handleClick = (e) => {
    this.props.toggleTodo(this.props.id);
  };

  completedClass = () => {
    return this.props.completed ? 'completed' : 'not-completed';
  };

  render() {
    return (
      <li className={this.completedClass()} onClick={this.handleClick}>
        {this.props.text}
      </li>
    );
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
