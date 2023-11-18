import { useState } from 'react';

export default function MyTransferList() {
  const [leftList, setLeftList] = useState([
    'HTML',
    'CSS',
    'React',
    'Java',
    'Python',
    'Vue',
  ]);
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
    setLeftList(leftList.filter((_, index) => !selectedItems[index]));
    setSelectedItems(Array(leftList.length + rightList.length).fill(false));
  };

  return (
    <div className='main-container'>
      <h1>Transfer List</h1>
      <div className='process' style={{ display: 'flex' }}>
        {leftList.map((list, index) => (
          <label key={index} htmlFor='leftlist'>
            <input
              type='checkbox'
              checked={selectedItems[index]}
              onChange={() => handleChange(index)}
              value={leftList}
            />
            {list}
          </label>
        ))}
        <section className='button'>
          <button onClick={moveLeft}>{'<'}</button>
          <button onClick={moveAllLeft}>{'<<'}</button>
          <button onClick={moveAllRight}>{'>>'}</button>
          <button onClick={moveRight}>{'>'}</button>
        </section>

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
    </div>
  );
}
