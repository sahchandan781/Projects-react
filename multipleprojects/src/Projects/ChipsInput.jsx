import React, { useState } from 'react';

function ChipsInput() {
  const [input, setInput] = useState("");
  const [chips, setChips ] = useState([]);

  const handleKeyDown = (e) => {
    if(e.key==='Enter'){
        e.preventDefault();
        if(input ==="") return;
        const trimmed = input.trim();
        if(trimmed && !chips.includes(trimmed)){
            setChips([...chips, trimmed])
            setInput("")
        }
        
    }
  }
  
  const handleDelete = (chipToDelete) => {
    setChips(chips.filter(chip => chip !== chipToDelete))
  }

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ padding: "8px", width: "200px" }}
      />
      <div>
        {
            chips.map((chip,index) => (
                <div key={index}>
                    {chip}
                    <button onClick={() => handleDelete(chip)}>X</button>
                </div>
            ))
        }
      </div>
      
    </div>
  );
}

export default ChipsInput;