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
      <div className="container vertical-center">
        <div className="row h-100 justify-content-center">
          <h1>ToDo List</h1>
        </div>
        <div className="row h-100 justify-content-center">
          <ToDoList
            todos={this.props.todos}
            completeTask={this.props.popToDo}
          />
          <AddToDo addComment={this.props.addToDo} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
