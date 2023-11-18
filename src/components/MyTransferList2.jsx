import { useState } from 'react';

export default function MyTransferList2() {
  const initialItems = ['HTML', 'CSS', 'JS', 'VUE', 'React', 'TS'];

  const [leftList, setLeftList] = useState(initialItems);
  const [rightList, setRightList] = useState([]);

  const [selectedItems, setSelectedItems] = useState(
    Array(leftList.length + rightList.length).fill(false)
  );

  const handleChange = (index) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[index] = !selectedItems[index];
    setSelectedItems(updatedSelectedItems);
  };

  const moveAllLeft = () => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  const moveAllRight = () => {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  const moveLeft = () => {
    const itemsToMove = rightList.filter(
      (item, index) => selectedItems[leftList.length + index]
    );
    setLeftList([...leftList, ...itemsToMove]);
    setRightList(
      rightList.filter((item, index) => !selectedItems[leftList.length + index])
    );

    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  const moveRight = () => {
    const itemsToMove = leftList.filter((item, index) => selectedItems[index]);
    setRightList([...rightList, ...itemsToMove]);
    setLeftList(leftList.filter((item, index) => !selectedItems[index]));

    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  return (
    <div>
      <h1>Transfer List</h1>
      <div>
        {leftList.map((list, index) => (
          <label key={index} htmlFor='LeftList'>
            <input
              type='checkbox'
              checked={selectedItems[index]}
              onChange={() => handleChange(index)}
              value={leftList}
            />
            {list}
          </label>
        ))}
      </div>
      <div className='buttons'>
        <button onClick={moveLeft}>MoveLeft</button>
        <button onClick={moveAllLeft}>MoveAllLeft</button>
        <button onClick={moveAllRight}>MoveAllRight</button>
        <button onClick={moveRight}>MoveRight</button>
      </div>
      {rightList.map((list, index) => (
        <label key={index}>
          <input
            type='checkbox'
            checked={selectedItems[leftList.length + index]}
            onChange={() => handleChange(leftList.length + index)}
            value={rightList}
          />
          {list}
        </label>
      ))}
    </div>
  );
}
