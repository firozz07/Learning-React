import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 let [counter,setcounter]=useState(0)

 const addvalue=()=>{
  setcounter(counter+1)
 }

 const removevalue=()=>{
  setcounter(counter-1)
 }

  return (
    <>

     <h1>firozz</h1>
     <h3>counter :{counter}</h3>
     <button onClick={addvalue}>Add value</button><br/>
     <button onClick={removevalue}>remove value</button>

    </>
  )
} 

export default App
