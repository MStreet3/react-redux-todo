import React from 'react';

const ToDo = ({ todo, completeTask }) => {
  return <li onClick={() => completeTask(todo.id)}>{todo.message}</li>;
};

export default ToDo;
