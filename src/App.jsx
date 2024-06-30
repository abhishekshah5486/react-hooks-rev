import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/CounterComponent/Counter'
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
  useEffect( () => {
    console.log("Counter Mounted");
    return () => {
      console.log("Unmount counter.")
    }
  }, []);
  // useEffect takes a callback function and a dependency array

  let [count, setCount] = useState(0);
  let [state, setState] = useState(true);
  let hRef = useRef();

  useEffect( () => {
    console.log("User updated count");
  }, [count]);

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
  let unmountCounter = () => {
    setState(!state);
  }
  return (
    <>
      <h2 ref={hRef} onClick={changeText}>Counter Component</h2>
      <button onClick={unmountCounter}>Toggle</button>
      {state ? <Counter count={count}
        incrementValue={incrementValue}
        decrementValue={decrementValue}
      /> : ""}
    </>
  )
}

export default App
