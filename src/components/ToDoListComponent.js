import React from 'react';
import ToDo from './ToDoComponent';

const ToDoList = ({ todos, completeTask }) => {
  const renderedTasks = todos.map((todo) => (
    <ToDo key={todo.id} todo={todo} completeTask={completeTask} />
  ));
  return <ul className="list-unstyled">{renderedTasks}</ul>;
};

export default ToDoList;
