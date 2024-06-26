import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(5);

  const addValue = () => {
    setCount(count+1);
  }
  const removeValue = () => {
    setCount(count-1);
  }
  return (
    <>
      <h1>Chai or Code</h1>
      <h2>Counter : {count}</h2>
      <button onClick={addValue}>Add Value</button><br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
