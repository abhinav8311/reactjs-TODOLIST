import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, { text: newTodo, done: false }];

     // Trim the input to remove extra whitespace and check if it's empty
    if (!newTodo.trim()) {
    return; // Do nothing if the input is empty or contains only whitespace
  }
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index].text;
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  function handleToggleDone(index) {
    const newTodoList = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, done: !todo.done }; // Toggle the done state
      }
      return todo;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <h1 className="center-title">Abhinav's Todo List</h1>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodo={handleEditTodo} handleToggleDone={handleToggleDone} todos={todos} />
    </>
  );
}

export default App;
