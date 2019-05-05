import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoList from './ToDoListComponent';
import { addToDo, popToDo } from '../redux/ActionCreators';
import AddToDo from './AddToDoComponent';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToDo: (todo) => dispatch(addToDo(todo)),
  popToDo: (todoId) => dispatch(popToDo(todoId))
});

class Main extends Component {
  render() {
    return (
      <div>
        <AddToDo addComment={this.props.addToDo} />
        <ToDoList todos={this.props.todos} completeTask={this.props.popToDo} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
