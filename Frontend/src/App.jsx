import React from "react"
import Home from "./home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import Contacts from "./contact/Contacts"
import Abouts from "./about/Abouts"
import SignUp from "./components/Signup"
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider"


function App() {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)


  return (
    <div className='bg-white text-black min-h-screen' >

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={ authUser? <Courses/> : <Navigate to="/signup"/> }/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/about" element= {<Abouts/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      <Toaster/>
      
    </div>
  )
}

export default App

