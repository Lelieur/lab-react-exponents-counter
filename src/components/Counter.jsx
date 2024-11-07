import { useState } from "react";

const Counter = ({ handleExpontentsCount, count }) => {


  const decrement = () => {
    handleExpontentsCount(count - 1)
  };

  const increment = () => {
    handleExpontentsCount(count + 1)
  };



  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
