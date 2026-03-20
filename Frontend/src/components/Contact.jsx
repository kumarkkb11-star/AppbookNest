
import React from 'react'
import { useForm } from "react-hook-form"


function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)   // ✅ you will get form data here
    reset()
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        
        <h3 className="text-2xl font-semibold text-center mb-6">
          Contact Us
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mbessage -1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 "
              {...register("name", { required: "Name is required" })}/>
              {errors.name && ( <p className="text-red-500 text-sm">{errors.name.message}</p>)}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
              {...register("email", { required: "Email is required" })}/>
              {errors.email && ( <p className="text-red-500 text-sm">{errors.email.message}</p>)}


          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            {...register("message", { required: "Message is required" })}/>
            {errors.message && ( <p className="text-red-500 text-sm">{errors.message.message}</p>)}


          </div>

          {/* Button */}
          <button className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400 transition duration-200">
            Send Message
          </button>

        </form>
      </div>

    </div>
  )
}

export default Contact