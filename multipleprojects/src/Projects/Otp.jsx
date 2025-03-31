import React, { useEffect, useRef, useState } from "react";

const OTP_Digits_Count = 5;
const Otp = () => {
  const [inputArray, setInputArray] = useState(
     new Array(OTP_Digits_Count).fill("")
   );
 
   const refArr = useRef([]);
 
   useEffect(() => {
     refArr.current[0]?.focus();
   }, []);
   const handleOnChange = (e, index) => {
     if (isNaN(e)) return;
     console.log(e);
     const newValue = e.trim();
     const newArr = [...inputArray];
     newArr[index] = newValue.slice(-1);
     setInputArray(newArr);
     console.log(inputArray);
     newValue && refArr.current[index + 1]?.focus();
   };
 
   const handleOnKeyDown = (e, index) => {
     if (!e.target.value && e.key === "Backspace") {
       refArr.current[index - 1]?.focus();
     }
   };
  
   

  return (
<div className="App">
      <h1>Validate OTP</h1>

      {inputArray.map((input, index) => {
        return (
          <input
            key={index}
            className="otp-input"
            type="text"
            ref={(input) => (refArr.current[index] = input)}
            value={inputArray[index]}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        );
      })}
      
    </div>
  );
};

export default Otp;
