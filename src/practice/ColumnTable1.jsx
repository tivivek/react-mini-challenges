import React, { useState } from 'react';

function createMatrix(rows, columns) {
  const matrix = Array.from(Array(rows), () => []);

  let count = 1,
    i = 0,
    j = 0,
    direcetion = 1;

  //   let matrix = [];

  while (j < columns) {
    // let row = [];
    while (i < rows && i >= 0) {
      //   row.push(count);
      matrix[i][j] = count++;
      //   count++;
      i += direcetion;
    }

    direcetion *= -1;
    i += direcetion;
    j += 1;
    // matrix.push(row);
  }
  return matrix;
}

export default function ColumnTable1() {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const values = createMatrix(rows, columns);
  console.log(values);

  return (
    <div className='main-container'>
      <h1>Column Table</h1>
      <section style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <label htmlFor='rows'>Rows::{rows}</label>
        <input
          type='range'
          value={rows}
          min='2'
          max='8'
          onChange={(e) => setRows(+e.target.value)}
        />
        <label htmlFor='columns'>Coumns::{columns}</label>
        <input
          type='range'
          value={columns}
          min='2'
          max='8'
          onChange={(e) => setColumns(+e.target.value)}
        />
      </section>
      <div className='table-container'>
        <table>
          <tbody>
            {values.map((row, idx) => (
              <tr key={idx}>
                {row.map((value) => (
                  <td
                    key={value}
                    style={{
                      border: '1px solid black',
                      fontWeight: '600',
                      width: '3rem',
                      height: '3rem',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
