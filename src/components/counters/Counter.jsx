export default function Counter({
  count,
  input,
  onIncrement,
  onDecrement,
  onReset,
  onInputChange,
}) {
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <input
        type='text'
        placeholder='Enter a number to set count'
        value={input}
        onChange={onInputChange}
      />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
