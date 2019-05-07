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
// className="col-xs-6 col-xs-offset-6"
class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1>ToDo List</h1>
        </div>

        <div className="row">
          <div className="col-sm-offset-6 col-sm-6">
            <ToDoList
              todos={this.props.todos}
              completeTask={this.props.popToDo}
            />
          </div>
        </div>
        <div className="row justify-content-center">
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
