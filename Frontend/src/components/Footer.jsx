import React from 'react'

const Footer = () => {
  return (
  
    <footer className='bg-slate-800 min-h-40 p-4 mt-5 w-full md:flex flex-col items-center overflow-hidden'>
 
      <div className='p-10 gap-10 md:flex '>
        <div >
          <h2 className='text-white text-3xl  text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]  font-bold'>
            <a href="/">bookNest</a>
          </h2>
            <p className='text-gray-400 text-sm'>Discover stories that shape your World🌏</p>
        </div>

        <div className='px-5'>
            <h2 className='text-white text-xl font-medium mb-2' >Quick LInks</h2>
            <div className='list-none text-sm text-gray-400 flex flex-col px-1'>

              <a className='hover:underline w-10 ' href="/">Home</a>
              <a className='hover:underline w-10 ' href="/course">Course</a>
              <a className='hover:underline w-10 ' href="/about">About</a>
              <a className='hover:underline w-10 ' href="/contact">Contact</a>
              
            </div>
        </div>

        <div className='px-5'>
            <h2 className='text-white text-xl font-medium mb-2' >Catagories</h2>
            <div className='list-none text-sm text-gray-400 flex flex-col px-1'>

              <a className='hover:underline w-20' href="#">Story Book</a>
              <a className='hover:underline w-20' href="#">MagaZine</a>
              <a className='hover:underline w-20' href="#">Music</a>
              <a className='hover:underline w-20' href="#">Comedy</a>
              
            </div>

        </div>

        <div className='px-5'>
            <h2 className='text-white text-xl font-medium mb-2' >Subscribe</h2>
            <div className='list-none text-sm text-gray-400 flex flex-col px-1'>
              <p>Get updates on new books & offeers</p> 
              <input type="email" name="" className='border w-2xs px-1 outline-hidden rounded md:w-full hover:border-green-300' placeholder='email@gmail.com' />
              <button className='my-1 text-white border border-green-600 bg-green-500 rounded p-1 w-20 cursor-pointer'>Subscribe</button>            
            </div>

        </div>

    

      </div>    


      <hr className='text-gray-300 w-[90%] mx-auto' />
      <div className='text-center m-2'>
        <p className='text-white pt-2'> ©2026 bookStore | All Rights Reserved  </p>
      </div>

    </footer>


  )
}

export default Footer