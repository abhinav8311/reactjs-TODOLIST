import React from 'react';

export default function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodo, handleToggleDone, todo } = props;

  return (
    <li className={`todoItem ${todo.done ? 'done' : ''}`}> {/* Apply 'done' class if the todo is marked as done */}
      {children}
      <div className="actionsContainer">
      <button onClick={() => handleToggleDone(index)}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodos(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
