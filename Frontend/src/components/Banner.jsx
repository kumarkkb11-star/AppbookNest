import React from 'react'

const Banner = () => {
  return (
    <>
    {/* // */}
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-10 m-6'>

        <div className='w-full md:w-1/2 order-2 md:order-1 space-y-6'>

          <h1 className='text-3xl md:text-4xl font-bold leading-snug'>
            Hello, welcome here to learn somethings
            <span className='text-pink-500'> new everyday!!!</span>
          </h1>

          <p className='text-base md:text-lg'>
            <span className='font-bold'>D</span>iscover a world of books all in one place.
            Our bookstore offers a wide collection of novels, educational books, and more. <br />
            Find your next favorite read quickly and easily. <br />
            Read, learn, and explore new ideas anytime. <br />
            Explore popular titles, new arrivals, and timeless classics.
          </p>

          <label className="input validator bg-white shadow w-full md:w-96 flex items-center gap-2">

            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>

            <input
              type="email"
              placeholder="mail@site.com"
              required
              className='w-full'
            />
          </label>

          <button className="btn btn-secondary w-fit mb-10">
            Submit
          </button>

        </div>
        {/* /// */}
        <div className='w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-25'>
          <img
            className='w-full max-w-md md:max-w-lg rounded-lg shadow'
            src="https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg"
            alt="books"
          />
        </div>

      </div>
    </>
  )
}

export default Banner