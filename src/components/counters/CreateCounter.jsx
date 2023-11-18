import { useState } from 'react';
import Counter from './Counter';

export default function ManyCounter() {
  const [counters, setCounters] = useState([{ count: 0, input: '' }]);

  const createCounter = () => {
    setCounters([...counters, { count: 0, input: '' }]);
  };

  const updateCounter = (index, newCount, newInput) => {
    const updatedCounters = [...counters];
    updatedCounters[index] = { count: newCount, input: newInput };
    setCounters(updatedCounters);
  };

  return (
    <div>
      <h1>Create Counters</h1>
      <button onClick={createCounter}>Create Counter</button>

      {counters.map((counter, index) => (
        <Counter
          key={index}
          count={counter.count}
          input={counter.input}
          onIncrement={() =>
            updateCounter(
              index,
              counter.count +
                (counter.input !== '' ? Number(counter.input) : 1),
              counter.input
            )
          }
          onDecrement={() =>
            updateCounter(
              index,
              counter.count -
                (counter.input !== '' ? Number(counter.input) : 1),
              counter.input
            )
          }
          onReset={() => updateCounter(index, 0, '')}
          onInputChange={(e) => {
            const newInput = e.target.value;
            updateCounter(index, counter.count, newInput);
          }}
        />
      ))}
    </div>
  );
}
