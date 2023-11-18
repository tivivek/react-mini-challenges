import { useState } from 'react';

function Shifting() {
  const [leftSide, setLeftSide] = useState([
    { name: 'react', checkedValue: false },
    { name: 'javascript', checkedValue: false },
    { name: 'typescript', checkedValue: false },
  ]);
  const [rightSide, setRightSide] = useState([
    { name: 'html', checkedValue: false },
    { name: 'css', checkedValue: false },
    { name: 'python', checkedValue: false },
  ]);

  const toggleCheckedValue = (items, name) => {
    return items.map((item) =>
      item.name === name ? { ...item, checkedValue: !item.checkedValue } : item
    );
  };

  const moveAllHandler = (isRight) => {
    if (isRight) {
      setRightSide([...rightSide, ...leftSide]);
      setLeftSide([]);
    } else {
      setLeftSide([...leftSide, ...rightSide]);
      setRightSide([]);
    }
  };

  const checkedValueHandler = (event, isRight) => {
    const name = event.target.name;
    if (isRight) {
      setRightSide(toggleCheckedValue(rightSide, name));
    } else {
      setLeftSide(toggleCheckedValue(leftSide, name));
    }
  };

  const moveCheckedValue = (isRight) => {
    const selectedItems = isRight ? leftSide : rightSide;
    const remainingItems = selectedItems.filter((item) => !item.checkedValue);
    const movedItems = selectedItems.filter((item) => item.checkedValue);

    if (isRight) {
      setLeftSide(remainingItems);
      setRightSide([
        ...rightSide,
        ...movedItems.map((item) => ({ ...item, checkedValue: false })),
      ]);
    } else {
      setRightSide(remainingItems);
      setLeftSide([
        ...leftSide,
        ...movedItems.map((item) => ({ ...item, checkedValue: false })),
      ]);
    }
  };

  return (
    <>
      <div>
        {leftSide.map((leftElement) => (
          <div key={leftElement.name}>
            <input
              type='checkbox'
              name={leftElement.name}
              checked={leftElement.checkedValue}
              onChange={(event) => checkedValueHandler(event, false)}
            />
            <p>{leftElement.name}</p>
          </div>
        ))}
      </div>

      <div className='move-section'>
        <button onClick={() => moveAllHandler(false)}> {'<<'} </button>
        <button onClick={() => moveCheckedValue(false)}> {'<'} </button>
        <button onClick={() => moveCheckedValue(true)}> {'>'} </button>
        <button onClick={() => moveAllHandler(true)}> {'>>'} </button>
      </div>

      <div>
        {rightSide.map((rightElement) => (
          <div key={rightElement.name}>
            <input
              type='checkbox'
              name={rightElement.name}
              checked={rightElement.checkedValue}
              onChange={(event) => checkedValueHandler(event, true)}
            />
            <p>{rightElement.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shifting;
