import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input value={this.state.todo} placeholder="Add A Todo" onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoForm);