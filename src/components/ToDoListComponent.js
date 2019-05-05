import React from 'react';
import ToDo from './ToDoComponent';

const ToDoList = ({ todos, completeTask }) => {
  const renderedTasks = todos.map((todo) => (
    <ToDo todo={todo} completeTask={completeTask} />
  ));
  return <ul className="list-unstyled">{renderedTasks}</ul>;
};

export default ToDoList;
