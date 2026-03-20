import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'


function Course() {

    return (
    <>
       <div className='max-w-screen-2xl container mx-auto md:px-20 p-0 sticky  top-0 bottom-0 left-0 right-0'>
            <div className='mt-20 text-center' >
                <h1 className='text-2xl font-semibold mx- md:text-4xl '>
                    We are delighted to have you 
                    <span className=' text-pink-500'> Here! :) </span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id soluta alias nobis nisi at ipsa? Necessitatibus quia accusamus esse a, maxime laboriosam quae itaque sed minus reprehenderit molestias earum dicta.</p>

                <Link to='/' >
                    <button className='mt-6 bg-pink-500 hover:bg-pink-700  text-white px-4 py-2 rounded cursor-pointer '>back</button>
                </Link>

            </div>

            <div className='mt-12 flex flex-wrap gap-5 items-center justify-center'>
                {
                    list.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>

        </div> 
       
    </>
  )
}

export default Course
