import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            {...props}            // Spread props so handleDeleteTodos, handleEditTodo, etc. are passed
            key={todoIndex}
            index={todoIndex}      // Pass the index to identify the task
            todo={todo}            // Pass the whole todo object (including text and done state)
          >
            <p>{todo.text}</p>     {/* Access the text property of the todo object */}
          </TodoCard>
        );
      })}
    </ul>
  );
}
