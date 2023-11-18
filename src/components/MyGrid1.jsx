import React, { useState } from 'react';

function createGrid(rows, cols) {
  const grid = [];
  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= cols; j++) {
      row.push(i * j);
    }
    grid.push(row);
  }
  return grid;
}

export default function MyGrid1() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [selectedCells, setSelectedCells] = useState([]);

  const grid = createGrid(rows, cols);

  const handelReset = () => {
    setRows('');
    setCols('');
    setSelectedCells([]);
  };

  const toggleSelected = (rowIndex, colIndex) => {
    const updatedSelectedCells = [...selectedCells];

    const cellKey = `${rowIndex}-${colIndex}`;

    if (updatedSelectedCells.includes(cellKey)) {
      updatedSelectedCells.splice(updatedSelectedCells.indexOf(cellKey), 1);
    } else {
      updatedSelectedCells.push(cellKey);
    }
    setSelectedCells(updatedSelectedCells);
  };

  const isSelected = (rowIndex, colIndex) => {
    const cellKey = `${rowIndex}-${colIndex}`;

    return selectedCells.includes(cellKey);
  };

  return (
    <div>
      <h1>Grid Color</h1>
      <label htmlFor='rows'>Rows::</label>
      <label htmlFor='rows'>
        <input
          type='text'
          placeholder='Enter rows'
          value={rows}
          onChange={(e) => setRows(+e.target.value)}
        />
      </label>
      <label htmlFor='cols'>Cols::</label>
      <input
        type='text'
        placeholder='Enter cols'
        value={cols}
        onChange={(e) => setCols(+e.target.value)}
      />
      <button onClick={handelReset}>Reset</button>

      <table>
        <tbody>
          {grid.map((rows, rowIndex) => (
            <tr key={rowIndex}>
              {rows.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    backgroundColor: isSelected(rowIndex, colIndex)
                      ? 'red'
                      : 'white',
                    border: '1px solid black',
                    width: '3rem',
                    height: '3rem',
                    color: 'black',
                  }}
                  onClick={() => toggleSelected(rowIndex, colIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
