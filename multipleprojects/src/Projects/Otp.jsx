import React, { useEffect, useRef, useState } from "react";



 

const Otp = () => {
  const length = 4;
  const [otp, setOTP] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);
  const onChangeOTP = (acc) =>{
    console.log(acc)
  }

  const focusInput = (index) => {
    if (index >= 0 && index < length) {
      inputsRef.current[index]?.focus();
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newValue = value.slice(-1); // Ensure only one digit
    const updatedOTP = [...otp];
    updatedOTP[index] = newValue;
    setOTP(updatedOTP);

    if (newValue && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      focusInput(index - 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
    const newOtp = Array(length).fill("");
    for (let i = 0; i < length && i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOTP(newOtp);
    focusInput(Math.min(pasted.length, length - 1));
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      onChangeOTP(otp.join(""));
    }
  }, [otp, onChangeOTP]);

  return (
    <div onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          inputMode="numeric"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            marginRight: "10px",
          }}
        />
      ))}
    </div>
  );
};

export default Otp;
