import React from "react"
import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import SignUp from "./components/SignUp"
import Contacts from "./contact/Contacts"
import Abouts from "./about/Abouts"


function App() {

  return (
    <div className='bg-white text-black min-h-screen' >

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/about" element= {<Abouts/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      
    </div>
  )
}

export default App

