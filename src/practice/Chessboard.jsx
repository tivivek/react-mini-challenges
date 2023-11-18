import { useState } from 'react';
import './Chessboard.css';

const rows = 8;
const cols = 8;

function ChessBoard() {
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
        r.map((highlighted, colIndex) =>
          rowIndex === row && colIndex === col
            ? !highlighted
            : Math.abs(rowIndex - row) === Math.abs(colIndex - col)
            ? !highlighted
            : highlighted
        )
      );
      return newGrid;
    });
  };

  return (
    <div id='chessboard'>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} id={`row-${rowIndex}`} className='row'>
          {row.map((highlighted, colIndex) => (
            <div
              key={`${colIndex}-${rowIndex}`}
              className={`element ${highlighted ? 'red' : ''}`}
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

export default ChessBoard;
