import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    case 'RESET':
      return 0;

    default:
      return state;
  }
}

export default function TodoUseReducerHook() {
  const [count, dispatch] = useReducer(reducer, 0);
  // const [input, setInput] = useState('');

  return (
    <div>
      <h1>Counter</h1>
      {count}

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Incremment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decremment
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
