import React, { useEffect, useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import { useAuth } from '../context/AuthProvider'


const Navbar = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  const [sticky, setSticky] = useState(false)
 
  useEffect(() => {
    const handleScroll=()=>{
      if (window.scrollY>0) {
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll )
    }


  }, [])
  

  const navbarItems = (
    <>
      <li className='text-white lg:text-black '><a href='/'>Home</a></li>
      <li className='text-white lg:text-black '><a href='/courses'>Course</a></li>
      <li className='text-white lg:text-black '><a href='/about'>About</a></li>
      <li className='text-white lg:text-black '><a href='/contact'>Contact</a></li>
    </>
  )

  return (
    <>
        <div className= {`max-w-screen-2xl container mx-auto md:px-20 p-0 sticky  top-0 bottom-0 left-0 right-0 ${sticky? "sticky-navbar   top-0 z-50 bg-gray-400 duration-300 text-white transition-all ease-in-out" : " shadow-sm" } `}>
            <div className=" navbar  ">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                      {navbarItems}
                    </ul>
                  </div>
                  <a href='/' className="text-2xl font-bold cursor-pointer text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)] ">
                    bookNest
                  </a>
                </div>

                <div className='navbar-end space-x-2'>
                    <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal px-1">
                        {navbarItems}
                        
                      </ul>
                    </div>

                    <div className='hidden md:block '>
                        <label className="input border bg-white  border-gray-500 text-black hover:hover-gallery">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </g>
                        </svg>
                        <input type="search" className='' required placeholder="Search" />
                    </label>
                    </div>

                    {
                      authUser? <Logout/> :
                    <div >
                      <a className='bg-black text-white px-3 py-2 rounded-md cursor-pointer hover:bg-slate-800 duration-300'
                       onClick={()=>document.getElementById('my_modal_3').showModal()} >
                        Login </a>
                        <Login/>
                    </div> 
                    }
                    

                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar