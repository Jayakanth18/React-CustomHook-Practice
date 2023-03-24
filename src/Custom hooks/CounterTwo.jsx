import React, { useState } from "react";
import useCounter from "./useCounter";

function CounterTwo() {
  const [count, increase, decrease, reset] = useCounter(5,5);
  return (
    <div>
      <h2>Count valus is: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
