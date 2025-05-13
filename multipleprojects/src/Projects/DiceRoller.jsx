import React, { useState } from 'react'

const DiceRoller = () => {
    const [diceValue, setDice] = useState(null);
    

    const handleDiceRoll = () => {
        const random  = Math.floor(Math.random() *6) +1;
        
        setDice(random);

    }


  return (
    <div>
       <div className="container">
            {/* Implement Dice Roller logic here */}
            <h1>Dice Roller</h1>
            <button onClick={handleDiceRoll}>Roll Dice</button>
            {
                diceValue ? (<h1>{`🎲 ${diceValue}`}</h1>):(<h1>Click to roll!</h1>)
            }
        </div>

    </div>
  )
}

export default DiceRoller