import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import User from './pages/User'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
function App() {
  return (
    <>

        <Navbar>
           </Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>


       

    </>
  )
}

export default App
