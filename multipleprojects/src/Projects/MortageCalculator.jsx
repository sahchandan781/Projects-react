import React, { useState } from 'react';

function MortageCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("")
  


  const calculateMortage = () => {

    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const years = parseInt(term);

    if (principal <= 0 || annualRate <= 0 || years <= 0 || isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
      setResult("Invalid input");
      return;
    }

    

    const monthlyInterest = annualRate / 12 / 100;
    const numberOfMonthlypayment = years * 12;
    const numenator = monthlyInterest * Math.pow(1 + monthlyInterest, numberOfMonthlypayment);
    const denomenator = Math.pow(1 + monthlyInterest, numberOfMonthlypayment) - 1;

    const abc = denomenator !== 0 ? (principal * numenator) / denomenator : principal * numenator;

    setResult(abc.toFixed(2));
    

  }
  return (
    <div>
    <h1>Mortgage Calculator</h1>
      <div>
        <label htmlFor="Loan-Amount">Loan Amount (INR): </label>
        <input type="number" name="Loan-Amount" id="Loan-Amount" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      {/* Implement Mortgage Calculator logic here */}
      
      <div>
        <label htmlFor="Annual-Interest-Rate">Annual Interest Rate (%):</label>
        <input type="number" id="Annual-Interest-Rate" name="Annual Interest Rate"
          min="0" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>

      <div>
        <label htmlFor="Loan-Term" >Loan Term (Years):</label>
        <input type="number" id="Loan-Term" min="0" value={term} onChange={(e) => setTerm(e.target.value)} />
</div>
      <button onClick={calculateMortage}>Calculate</button>
      
      {result && <label aria-label="result" role="status">Monthly Payment: {result}</label>}
    </div>
  );
}

export default MortageCalculator;