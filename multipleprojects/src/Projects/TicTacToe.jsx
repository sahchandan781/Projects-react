import React, { useState } from "react";
//import "./styles.css"; // Optional for your own styling

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = board.every(cell => cell !== null) && !winner;
  const gameOver = winner || isDraw;

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? "X" : "O";
    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  const getStatusMessage = () => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return `It's a Draw!`;
    return `Next Player: ${isXTurn ? "X" : "O"}`;
  };

  return (
    <div className="game">
    <h1>Tic Tac Toe</h1>
      <h2 id="status">{getStatusMessage()}</h2>

      <div className="board" id="board" style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "5px" }}>
        {board.map((value, index) => (
          <button
            
            key={index}
            id={`cell-${index}`}
            className="square"
            onClick={() => handleClick(index)}
            disabled={!!value || gameOver}
            style={{
              width: "60px",
              height: "60px",
              fontSize: "24px",
              cursor: gameOver ? "not-allowed" : "pointer"
            }}
          >
            {value}
          </button>
        ))}
      </div>

      <button id="restart" onClick={handleRestart} style={{ marginTop: "16px" }}>
        Restart Game
      </button>
    </div>
  );
}

// Helper function to check winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
