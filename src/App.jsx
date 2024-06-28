import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let [count, setCount] = useState(5);

  // const addValue = () => {
  //   setCount(count+1);
  // }
  // const removeValue = () => {
  //   setCount(count-1);
  // }
  // return (
  //   <>
  //     <h1>Chai or Code</h1>
  //     <h2>Counter : {count}</h2>
  //     <button onClick={addValue}>Add Value</button><br /><br />
  //     <button onClick={removeValue}>Remove Value</button>
  //   </>
  // )
  let [count, setCount] = useState(0);
  let hRef = useRef();

  const changeText = () => {
    hRef.current.innerText = 'WebRTC';
  }
  let incrementValue = () => {
    count = count + 1;
    setCount(count);
    console.log(count);
  }
  
  let decrementValue = () => {
    count = count - 1;
    setCount(count);
    console.log(count);
  }
  return (
    <>
      <h2 ref={hRef} onClick={changeText}>Counter Component</h2>
      <p>{count}</p>
      <button onClick={incrementValue}>+</button>
      <button onClick={decrementValue}>-</button>
    </>
  )
}

export default App
