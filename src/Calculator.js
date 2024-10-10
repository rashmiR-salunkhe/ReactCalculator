import React, { useState } from "react";
import './Calculator.css';  


function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

 
  const validateInput = () => {
    if (num1 === "" || num2 === "") {
      setMessage("Error! Num1 Cannot Be Empty");
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setMessage("Error! Inputs must be valid numbers.");
      return false;
    }
    return true;
  };


  const handleOperation = (operation) => {
    if (!validateInput()) return;

    let res = 0;
    switch (operation) {
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        if (parseFloat(num2) === 0) {
          setMessage("Error! Division by zero.");
          return;
        }
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return;
    }

    setResult(res);
    setMessage(`Success!`);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <input
        type="text"
        placeholder="Num 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Num 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="operations">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>

      {message && <p className={`message ${message.includes("Success") ? "success" : "error"}`}>{message}</p>}

      {result !== null && <p>Result - {result}</p>}
    </div>
  );
}

export default Calculator;
