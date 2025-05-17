import React, { useEffect, useState } from 'react';


function GuessTheNumber() {
  const [input, setInput] = useState("");
  const [random, setRandom] = useState(0)
  const [attemp, setAttemp] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    resetGame();
  }, [])

  // Function to handle guess checking
  const handleGuess = () => {

    const guess = Number(input);

    if (!input || isNaN(guess) || guess < 1 || guess > 100) {
      setResult("Please enter a number between 1 and 100.");
      return;
    }

    setAttemp(prev => prev + 1);

    if (guess > random) {
      setResult("Too high! Try again.");
    } else if (guess < random) {
      setResult("Too low! Try again.");
    } else {
      setResult(`Congratulations! You guessed the number in ${attemp + 1} attempts.`);
    }

  };

  // Function to reset the game
  const resetGame = () => {
    const generate = Math.floor(Math.random() * 100) + 1;
    setRandom(generate);
    setResult("");
    setInput("");
    setAttemp(0);

  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0" }}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input" type="number" value={input} onChange={(e) => setInput(e.target.value)} 
      />
      <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
        <button onClick={() => handleGuess()}>Check Guess</button>
        <button onClick={() => resetGame()}>Reset Game</button>
      </div>
      {
        result && <p>{result}</p>
      }
    </div>
  );
}

export default GuessTheNumber;
