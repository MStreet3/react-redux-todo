import * as ActionTypes from './ActionTypes';
import uuid from 'uuid/v4';

export function Reducer(
  state = {
    todos: []
  },
  action
) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      let todoId = uuid();
      let todo = { id: todoId, message: action.payload };
      return {
        ...state,
        todos: state.todos.concat(todo)
      };
    case ActionTypes.POP_TODO:
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload)
      };
    default:
      return { ...state };
  }
}
