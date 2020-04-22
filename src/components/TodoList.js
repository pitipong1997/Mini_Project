import React from 'react';
import Todo from './Todo';
import '../TodoList.css';

const TodoList = ({ todos, toggleTodo }) => (
  
  <ul className='lc'>
    <h1 className='he'>The Events List</h1>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;