import React from 'react';

const ToDo = ({ todo, completeTask }) => {
  return (
    <li key={todo.id} onClick={() => completeTask(todo.id)}>
      {todo.message}
    </li>
  );
};

export default ToDo;
