import { useState } from 'react'
import useCounter from './CustomHook/counterHook'
function App() {
const {Count,reset,Increment}=useCounter(0);

  return (
    <>
    <div className='outer'>
    <h1>Click Speed Counter</h1>

    <div className="div">

    <div className="main">
      <div className="count">
        <h2>Count is : {Count}</h2>
      </div>

      <div className="buttons">
        <button onClick={Increment}>Click Me !!</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default App
