import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input.trim() !== '') {
      if (editIndex === null) {
        setTodos([...todos, input]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = input;
        setTodos(updatedTodos);
        setEditIndex(null);
      }
      setInput('');
    }
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((item, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='main-container'>
      <h1>Todo App</h1>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Add a task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>
          {editIndex === null ? 'Add' : 'Update'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
