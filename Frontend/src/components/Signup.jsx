import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


function SignUp() {

     const {
       register,
       handleSubmit,
       formState: { errors },
       } = useForm()
    const onSubmit = (data) => console.log(data)
       

  return (
    <>
      <div className=' flex h-screen items-center justify-center '>
       <div className="modal modal-open bg-gray-100 shadow-2xl ">
            <div className="modal-box bg-white py-10" >

              <form onSubmit={handleSubmit(onSubmit)}>
                <Link to='/' className="btn btn-sm   absolute right-2 top-2">✕</Link>
         

            <h3 className="font-bold text-lg">Signup</h3>

            <div className='m-4 space-y-2'>
                <label>Name :</label><br />
                <input type="text" placeholder='enter your full name '
                    className='border w-80 rounded border-gray-400 px-3 py-1 outline-none' 
                    {...register("name",{required:true})}/> <br />
                    {errors.name && <label className='text-red-600 text-sm'> *name is required *</label>}
                <br />
                <label>Email :</label><br />
                <input type="email" placeholder='enter your email address'
                    className='border w-80 rounded border-gray-400 px-3 py-1 outline-none' 
                   {...register("email",{required:true})}/> <br />
                    {errors.email && <label className='text-red-600 text-sm'> *email is required *</label>}
                <br />
                <label>Password : </label> <br />
                <input type="password"
                    placeholder='password' 
                    className='border rounded  border-gray-400 px-3 py-1 outline-none w-80'
                    {...register("password",{required:true})}/> <br />
                    {errors.password && <label className='text-red-600 text-sm'> *password is required *</label>}

            </div>
            <div className='flex justify-evenly'>
                <button className='w-20 py-1 btn rounded border-pink-500 bg-pink-500 hover:bg-pink-400 cursor-pointer'>Signup</button>
                <p>
                    Not register? {' '}
                    <button type='button' className='underline text-blue-500 cursor-pointer'
                        onClick={()=>document.getElementById('my_modal_3').showModal()} >
                        Login
                    </button>{''}
                    <Login/>
                </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
