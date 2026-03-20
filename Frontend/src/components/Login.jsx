import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"



function Login() {

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)



  return (
    <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white ">
           <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                <Link to='/' className="btn btn-sm   absolute right-2 top-2"
                onClick={()=>document.getElementById("my_modal_3").close()}
                >
                ✕
                </Link>
       
            <h3 className="font-bold text-lg">Login</h3>
            <div className='m-4 space-y-2'>
                <span>Email :</span><br />
                <input 
                    type="email" 
                    placeholder=' enter your email address'
                    className='border w-80 rounded border-gray-400 px-3 py-1 outline-none' 
                    {...register("email",{required:true})}/> <br />
                    {errors.email && <span className='text-red-600 text-sm'> *This field is required *</span>}
                <br />
                <span>Password : </span> <br />
                <input type="password"
                    placeholder='password' 
                    className='border rounded  border-gray-400 px-3 py-1 outline-none'
                    {...register("password",{required:true})}/> <br />
                    {errors.password &&  <span className='text-red-600 text-sm'>*password is required *</span>}

            </div>
            <div className='flex justify-evenly'>
                <button className='w-20 py-1 rounded bg-pink-500 hover:bg-pink-400 cursor-pointer'>login</button>
                <p>
                    Not register? {' '}
                    <Link to='/signup' className='underline text-blue-500 cursor-pointer'>
                        Signup
                    </Link>{''}
                </p>
            </div>
            </form>
          </div>
        </dialog>
    </div>
  )
}

export default Login
