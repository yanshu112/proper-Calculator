import React, {useState} from "react";
import "./styles.scss";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const buttons = [
    "C", "/", "*", "←",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".", ""
  ];

  // Handle button click
  const handleButtononClick = (btn) => {
    if (btn==="C") {
      setDisplay("0");
    } else if (btn === "←") {
        setDisplay(display.slice(0, -1) || "0");
      } else if (btn === "="){
        // Handle the result for now, you can add evaluation logic here later
      try {
        setDisplay(eval(display).toString()); // Warning: eval should be used with caution!
      } catch (error) {
        setDisplay("error");
      }
      }else{
        // If the display is 0, replace it with the clicked number
        setDisplay(display === "0" ? btn : display + btn);

      }
      };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="calculator-button"
              disabled={btn === ""}
              onClick={() => handleButtononClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
