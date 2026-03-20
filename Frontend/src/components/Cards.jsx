import React from 'react'

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300">

        <figure className="h-64 overflow-hidden rounded ">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded border " />
        </figure>

        <div className="card-body">

          <div className="flex justify-between items-center">
            <h2 className="card-title text-gray-400 text-lg font-semibold">
              {item.name}
            </h2>

            <span className="badge badge-secondary">
              {item.catagory}
            </span>
          </div>

          <p className="text-gray-300 text-sm">
            {item.title}
          </p>

          <div className="card-actions justify-between items-center mt-3">

            <span className="badge badge-outline  text-white px-4 py-3">
              {item.Price}
            </span>

            <button className="btn btn-sm bg-white hover:bg-pink-400 text-black border-none">
              {item.Order}
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards
