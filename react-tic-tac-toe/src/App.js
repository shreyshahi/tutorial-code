import {useState} from 'react';

function Square({value, setValue}) {
  return <button className="square" onClick={setValue}>{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} setValue={() => handleClick(0)}/>
        <Square value={squares[1]} setValue={() => handleClick(1)}/>
        <Square value={squares[2]} setValue={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} setValue={() => handleClick(3)}/>
        <Square value={squares[4]} setValue={() => handleClick(4)}/>
        <Square value={squares[5]} setValue={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} setValue={() => handleClick(6)}/>
        <Square value={squares[7]} setValue={() => handleClick(7)}/>
        <Square value={squares[8]} setValue={() => handleClick(8)}/>
      </div>
    </>
  );
}
