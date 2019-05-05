import * as ActionTypes from './ActionTypes';

export function Reducer(state = {
    todos: []
}, action){
    switch(action.type){
        case ActionTypes.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case ActionTypes.POP_TODO:
            return {...state, todos: [...state.todos].filter(todo => todo.id !== action.payload)}
    }
}