import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import book from "../assets"


const Cards = () => {

    const slideRef = useRef(null)

    const slideLeft =() => {
        slideRef.current.slickPrev()
        
    }
    const slideRight=() => {
        slideRef.current.slickNext()
    }
    
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  const cards = [
    { id: 1, title: "Card 1",catagory:"Story Book" , image:"/imageReq/boyCriedwolf.png" },
    { id: 2, title: "Card 2",catagory:" Comics" ,image:"/imageReq/ChatGPT Image.png" },
    { id: 3, title: "Card 3",catagory:" Magazine" , image:"/imageReq/ChatGPT-image.png" },
    { id: 4, title: "Card 4",catagory:" Magazine" , image: "/imageReq/chatgpt-image.png" },
    { id: 5, title: "Card 5",catagory:" Magazine" , image: "/imageReq/chatgpt-image.png" },
    { id: 6, title: "Card 6",catagory:" Magazine" , image: "/imageReq/chatgpt-image.png" },
   
  ];

  return (
    <div className="w-10/12 mx-auto mt-10 ">
        <div className="flex justify-end gap-3 ">
            <button onClick={slideLeft} className="btn btn-ghost w-12 h-10 border border-gray-400 bg-gray-200 rounded hover:bg-gray-400 " >◀</button>
            <button onClick={slideRight} className=" btn btn-ghost w-12 h-10 border border-gray-400 bg-gray-200 rounded hover:bg-gray-400">▶</button>
        
        </div>

        <Slider {...settings} ref={slideRef}>
          {cards.map((card) => (
            <div key={card.id} className="p-3">
              <div className="bg-white shadow-xl rounded-xl p-6 text-center">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={card.image}
                  alt={card.title}
                />
                <h2 className="text-xl font-bold mt-3">{card.title}</h2>
                <p>{card.catagory}</p>
                <p className="text-gray-500 mt-2">
                  This is sample card content
                </p>
              </div>
            </div>
          ))}
        </Slider>


    </div>
  );
};

export default Cards;

# Facebook insta youTube

    <nav>
            <div className="grid grid-flow-col gap-4 mt-5">
              <a className=' cursor-pointer'>
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill='white' />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#000000" stroke="none" />
                </svg>
              </a>
               <a className=' cursor-pointer'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
               <a className=' cursor-pointer'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>


