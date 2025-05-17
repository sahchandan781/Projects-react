import React, { useEffect, useState } from 'react'
import "../App.css"


const ProgressBar = () => {
   


const [value, setValue] = useState(0);
    const [bgcolor, setBgColor] = useState("red");

    const updateColor = (val) => {
        if (val >= 80) {
            setBgColor("green");
        } else if (val >= 40) {
            setBgColor("orange");
        } else {
            setBgColor("red");
        }
    };

    const handleIncrease = () => {
        if (value < 100) {
            const newVal = value + 10;
            setValue(newVal);
            updateColor(newVal);
        }
    };

    const handleDecrease = () => {
        if (value > 0) {
            const newVal = value - 10;
            setValue(newVal);
            updateColor(newVal);
        }
    };

    return (
        <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
            <h1>Progress Bar</h1>

            <div style={{ 
                width: "400px", 
                backgroundColor: "#D3D3D3", 
                padding: "4px", 
                borderRadius: "10px",
                overflow: "hidden"
            }}>
                <div
                    style={{
                        width: `${value}%`,
                        backgroundColor: bgcolor,
                        height: "30px",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        
                        alignItems: "center",
                        borderRadius: "6px",
                        transition: "width 0.3s ease-in-out"
                    }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    id="testBgColor"
                >
                    {value}%
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                <button onClick={handleDecrease}>-10%</button>
                <button onClick={handleIncrease} style={{ marginLeft: "10px" }}>+10%</button>
            </div>
        </div>
    );
  
}

export default ProgressBar