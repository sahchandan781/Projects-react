import React, { useState } from 'react'


export const checkPasswordStrengt = (password) => {
  if(!password) return "Weak Password";

  let criteriaMet = 0;

  if(password.length >= 8) criteriaMet++;
  if(/[A-Z]/.test(password)) criteriaMet++;
  if(/[a-z]/.test(password)) criteriaMet++;
  if(/\d/.test(password)) criteriaMet++;
  if(/[\W_]/.test(password)) criteriaMet++; // special character including _

  if(criteriaMet === 0) return "Weak Password";
  if(criteriaMet === 1) return "Level 1";
  if(criteriaMet <= 3 ) return "Level 2";

  return "Level 3";

}

const PasswordStrength = () => {
  const [input, setInput] = useState("");
  const [strength, setStrength] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = checkPasswordStrength(input);
    setStrength(result);
  }

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input type="password" name="password" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter password"></input>
      <button onClick={(e) => handleSubmit(e)}>Check Strength</button>
      {strength && <h2>{strength}</h2>}
    </div>
  );
}

export default PasswordStrength