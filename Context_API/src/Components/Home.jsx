import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

function Home() {
  const {theme,settheme}=useContext(ThemeContext)
  return (
    <div className='home'>Welcome to the Page
    <p>Current Theme :{theme} 
      <button onClick={()=>{
      settheme(theme==="white"?"black":"white")
    }}>Change</button></p> </div>
  )
}

export default Home