import React, { useRef } from 'react'
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
    const filterData= list.filter((data)=> data.catagory==="Free")

    const slideRef = useRef(null)
    const slideLeft=() => {
      slideRef.current.slickPrev()
    }
    const slideRight= () => {
      slideRef.current.slickNext()
    }
    

    

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 p-0'>
          <div className=' mx-10' >
            <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
            <p>Gaining knowledge from books is a skill that combines strategic reading, active engagement, and practical application. To maximize knowledge absorption from the vast array of available literature, one must move beyond passive reading and adopt a structured approach</p>
          </div>


        <div className="slider-container rounded-2xl p-5">
          <div className="flex justify-end gap-3 m-4 text ">
           <button onClick={slideLeft} className="btn btn-ghost w-12 h-10 border border-gray-400 bg-gray-200 rounded hover:bg-gray-400 " >◀</button>
           <button onClick={slideRight} className=" btn btn-ghost w-12 h-10 border border-gray-400 bg-gray-200 rounded hover:bg-gray-400">▶</button>
         </div>
        
          <Slider {...settings} ref={slideRef}>
            {filterData.map((item)=>(
                <Cards item={item} key={item.id}/>

            ))}
          </Slider>
        </div>
    </div>


    </>
  )
}

export default Freebook
