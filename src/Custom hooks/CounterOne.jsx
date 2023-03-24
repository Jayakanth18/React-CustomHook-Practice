import React, { useState } from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [counter, increase, decrease, reset] = useCounter(0,1);

  return (
    <div>
      <h2>Count valus is: {counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
