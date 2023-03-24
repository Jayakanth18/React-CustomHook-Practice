import { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((previousValue) => previousValue + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }

  return [counter, increase, decrease, reset];
}

export default useCounter;
