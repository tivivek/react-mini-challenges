import React, { useState } from 'react';

export default function MyTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
    }
    setInput('');
  };

  const deleteTodo = (index) => {
    const updatedTodo = [...todos];
    updatedTodo.splice(index, 1);
    setTodos(updatedTodo);
  };

  return (
    <div className='main-container'>
      <h1>To-do App</h1>
      <input
        type='text'
        placeholder='Enter todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button key={index} onClick={(index) => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
