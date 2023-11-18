import React, { useState } from 'react';

function createGrid(rows, cols) {
  const grid = [];
  for (let i = 1; i <= rows; i++) {
    let rows = [];
    for (let j = 1; j <= cols; j++) {
      rows.push(i * j);
    }
    grid.push(rows);
  }
  return grid;
}

export default function MyGrid1() {
  const [rows, setRows] = useState('');
  const [cols, setCols] = useState('');
  const [selectedCells, setSelectedCells] = useState([]);

  const toggleSelected = (rowIndex, colIndex) => {
    const updatedSelectedCells = [...selectedCells];

    const cellKey = `${rowIndex}-${colIndex}`;

    if (updatedSelectedCells.includes(cellKey)) {
      updatedSelectedCells.splice(updatedSelectedCells.indexOf(cellKey, 1));
    } else {
      updatedSelectedCells.push(cellKey);
    }
    setSelectedCells(updatedSelectedCells);
  };

  const isSelected = (rowIndex, colIndex) => {
    const cellKey = `${rowIndex}-${colIndex}`;
    return selectedCells.includes(cellKey);
  };

  const grid = createGrid(rows, cols);
  console.log(grid);

  const handleReset = () => {
    setRows('');
    setCols('');
    setSelectedCells([]);
  };

  return (
    <div>
      <h1>Grid Color</h1>
      <label htmlFor='rows'>
        <input
          type='text'
          placeholder='Enter rows'
          value={rows}
          onChange={(e) => setRows(+e.target.value)}
        />
      </label>
      <label htmlFor='cols'>
        <input
          type='text'
          placeholder='Enter cols'
          value={cols}
          onChange={(e) => setCols(+e.target.value)}
        />
      </label>
      <button onClick={handleReset}>reset</button>

      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td
                  key={columnIndex}
                  onClick={() => toggleSelected(rowIndex, columnIndex)}
                  style={{
                    backgroundColor: isSelected(rowIndex, columnIndex)
                      ? 'red'
                      : 'white',
                    border: '1px solid #000',
                    width: '3rem',
                    height: '3rem',
                    color: 'black',
                  }}
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
