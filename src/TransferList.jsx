import { useState } from 'react';

export default function TransferList() {
  const initialLeftList = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];

  const [leftList, setLeftList] = useState(initialLeftList);
  const [rightList, setRightList] = useState([]);

  const [selectedItems, setSelectedItems] = useState(
    Array(initialLeftList.length + rightList.length).fill(false)
  );

  const handleMoveRight = () => {
    const itemsToMove = leftList.filter((_, index) => selectedItems[index]);
    setRightList([...rightList, ...itemsToMove]);
    setLeftList(leftList.filter((_, index) => !selectedItems[index]));
    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  const handleMoveLeft = () => {
    const itemsToMove = rightList.filter(
      (_, index) => selectedItems[leftList.length + index]
    );
    setLeftList([...leftList, ...itemsToMove]);
    setRightList(
      rightList.filter((_, index) => !selectedItems[leftList.length + index])
    );
    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  const handleMoveAllRight = () => {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  const handleMoveAllLeft = () => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  const handleCheckboxChange = (index) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[index] = !selectedItems[index];
    setSelectedItems(updatedSelectedItems);
  };
  return (
    <div className='main'>
      <div className='list-container'>
        {leftList.map((item, index) => (
          <label key={index}>
            <input
              type='checkbox'
              checked={selectedItems[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            {item}
          </label>
        ))}
      </div>
      <div className='button-container'>
        <button onClick={handleMoveRight}>Move Right</button>
        <button onClick={handleMoveAllRight}>Move All Right</button>
        <button onClick={handleMoveAllLeft}>Move All Left</button>
        <button onClick={handleMoveLeft}>Move Left</button>
      </div>
      <div className='list-container'>
        {rightList.map((item, index) => (
          <label key={index}>
            <input
              type='checkbox'
              checked={selectedItems[leftList.length + index]}
              onChange={() => handleCheckboxChange(leftList.length + index)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
