import { useState } from 'react';
import React from 'react'


const Counter = () => {

    const [counter, setCounter] = useState(0); //useState es un hook----valor inicial 0

    const sumClick = () => {
        setCounter(counter + 1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <p>{ counter }</p>
        <button onClick={sumClick}>Click me to watch a event!!!</button>
    </div>
  )
  
}

export default Counter