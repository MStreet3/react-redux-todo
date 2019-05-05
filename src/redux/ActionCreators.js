import * as ActionTypes from './ActionTypes';

export function addToDo(todo){
    return {
        type: ActionTypes.ADD_TODO,
        payload: todo
    }
}

export function popToDo(todoId){
    return{
        type: ActionTypes.POP_TODO,
        payload: todoId
    }
}