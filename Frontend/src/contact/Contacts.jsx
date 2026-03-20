import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Contacts() {
  return (
    <>
      <Navbar/> 
        <div>
            <Contact/>
        </div>  
      <Footer/>
    </>
  )
}

export default Contacts
