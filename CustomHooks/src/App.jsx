import { useState } from 'react'
import useCounter from './CustomHook/Counter'

function App() {
const {count,increment ,decrement ,reset}=useCounter(0);
  return (
    <>
     <h1>Set Count:{count}</h1>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
     <button onClick={reset}>Reset</button>

    </>
  )
}

export default App
