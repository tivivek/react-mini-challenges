import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }];

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

export default function TodoUseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', text });
      setText('');
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  return (
    <div className='main-container'>
      <h1>To-Do App</h1>
      <input
        type='text'
        placeholder='Enter todo...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
