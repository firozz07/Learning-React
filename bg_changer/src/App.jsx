import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [color, setColor] = useState("green");

  return (
   <div className="w-full h-screen duration-200 " 
   style={{backgroundColor:color , fontSize:30}}>
  
  <div className="fixed flex flex-wrap justify-center align-middle bottom-7 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 bg-white p-3 shadow-lg rounded-2xl">
<button className="rounded-full text-white outline-none px-4 py-1" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>RED</button>
<button className="rounded-full text-white outline-none px-4 py-1" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>black</button>
<button className="rounded-full text-white outline-none px-4 py-1" style={{backgroundColor:"olive"}}onClick={()=>setColor("olive")}>olive</button>
<button className="rounded-full text-white outline-none px-4 py-1" style={{backgroundColor:"violet"}}onClick={()=>setColor("violet")}>violet</button>
<button className="rounded-full text-white outline-none px-4 py-1" style={{backgroundColor:"pink"}}onClick={()=>setColor("pink")}>pink</button>

    </div>

  </div>
   </div>

  )
}

export default App
