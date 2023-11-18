import React, { useState } from 'react';

const rows = 8,
  cols = 8;

export default function Chessboard1() {
  const [grid, setGrid] = useState(Array(rows).fill(Array(cols).fill(false)));

  const resetHighlights = () => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => row.map(() => false));
      return newGrid;
    });
  };

  const toggleHighlight = (row, col) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((r, rowIndex) =>
        r.map((highlight, colIndex) =>
          rowIndex == row && colIndex == col
            ? !highlight
            : row - rowIndex == col - colIndex
            ? !highlight
            : highlight
        )
      );
      return newGrid;
    });
  };
  return (
    <div id='chessboard'>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className='row'>
          {row.map((highlight, colIndex) => (
            <div
              key={colIndex}
              className={`element ${highlight ? 'red' : ''}`}
              onClick={() => {
                if (grid[rowIndex][colIndex]) {
                  resetHighlights();
                } else {
                  resetHighlights();
                  toggleHighlight(rowIndex, colIndex);
                }
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
