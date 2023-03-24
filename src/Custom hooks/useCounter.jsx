import { useState } from "react";

// initialCounter is used to set the initialValue of the counter.It is setted in the counterComponent.
//default initial value is 0 if the initialValue is not mentioned.

//value is how many step is increased.


function useCounter(initialCounter = 0,value) {
  const [counter, setCounter] = useState(initialCounter);

  function increase() {
    setCounter((previousValue) => previousValue + value);
  }
  function decrease() {
    setCounter(counter - value);
  }
  function reset() {
    setCounter(0);
  }

  return [counter, increase, decrease, reset];
}

export default useCounter;
