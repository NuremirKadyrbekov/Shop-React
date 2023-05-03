import { React, useState } from 'react'
import './style.css'
export default function Bpp() {
  const [counter, setCounter] = useState(0);
  const [counterr, settCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
    settCounter(count => count + 40000);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
    settCounter(count => count - 40000);
  };
 
 
 
  return (
    <div className="counter">
     
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn1" onClick={decrease}>-</button>
        <p>{counterr}som</p>
      </div>
    </div>
  );
}