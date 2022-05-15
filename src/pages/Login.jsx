import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {user, logIn} = UserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }


  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/a246efaa-6cfa-465c-9c47-09ccfb045f07/UG-en-20220509-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-o w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] bg-black/75 text-white mx-auto">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            {error ? <p className='p-3 bg-red-300 my-2' >{error}</p> : null}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e)=>{setEmail(e.target.value)}}
                className="p-3 my-2 bg-gray-500 rounded"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input
                onChange={(e)=>{setPassword(e.target.value)}}
                className="p-3 my-2 bg-gray-500 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  New to Izzieflix?
                </span>{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login