import React, {useState} from 'react'

function CounterTwo() {
    const [counter, setCounter] = useState(0)

    function increase(){
        setCounter(previousValue => previousValue + 1)
    }
    function decrease(){
        setCounter(counter - 1)
    }
    function reset(){
        setCounter(0)
    }

  return (
    <div>
    <h2>Count valus is: {counter}</h2>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
    </div>
    )
}

export default CounterTwo;