import { useState } from 'react';

export default function Todo() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  console.log(todo);
  const addTodo = () => {
    if (input.trim() !== '') {
      if (editIndex === null) {
        setTodo([...todo, input]);
      } else {
        const updatedTodos = [...todo];
        updatedTodos[editIndex] = input;
        setTodo(updatedTodos);
        setEditIndex(null);
      }
    }
    setInput('');
  };

  const handleEdit = (index) => {
    setInput(todo[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todo];
    updatedTodos.splice(index, 1);
    setTodo(updatedTodos);
  };

  return (
    <div>
      <h1>Todos</h1>
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
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>EDIT</button>
            <button onClick={() => handleDelete(index)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
