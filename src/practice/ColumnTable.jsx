import React, { useState } from 'react';

function createMatrix(rows, cols) {
  const matrix = Array.from(Array(rows), () => []);

  let i = 0,
    j = 0,
    direction = 1,
    count = 1;

  while (j < cols) {
    while (i < rows && i >= 0) {
      matrix[i][j] = count++;
      i += direction;
    }

    direction *= -1;
    i += direction;
    j++;
  }
  return matrix;
}

export default function ColumnTable() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const values = createMatrix(rows, cols);

  return (
    <div>
      <h1>Column Table</h1>

      <label htmlFor='rows'>Rows::{rows}</label>
      <input
        type='range'
        min={2}
        max={8}
        value={rows}
        onChange={(e) => setRows(+e.target.value)}
      />

      <label htmlFor='cols'>Columns::{cols}</label>
      <input
        type='range'
        min={2}
        max={8}
        value={cols}
        onChange={(e) => setCols(+e.target.value)}
      />

      <table>
        <tbody>
          {values.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
