import React, { use, useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Loginpage = () => {
  const [currstate, setcurrstate] = useState("Sign Up")
  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [bio, setbio] = useState('')
  const [datasubmitted, setdatasubmitted] = useState(false)

  const navigate = useNavigate();

  const biohandler = () => {
    if (currstate === 'Sign Up' && bio) {
      setdatasubmitted(false);
      setcurrstate('Login');
    }
  }

  const onsubmithandler = (event) => {
    event.preventDefault();

    if (currstate === 'Login') {
      navigate('/chat-app/');
    }

    if (currstate === 'Sign Up') {

      if (!datasubmitted) {
        setdatasubmitted(true)
        return;
      }
      if (bio) {
        biohandler();
      }
    }
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      {/* left */}
      <img src={assets.logo_big} alt='' className='w-[min(30vw,250px)]' />
      {/* right */}
      <form onSubmit={onsubmithandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currstate}
          {datasubmitted &&
            <img onClick={() => setdatasubmitted(false)} src={assets.arrow_icon} alt='' className='w-5 cursor-pointer' />}
        </h2>

        {currstate === 'Sign Up' && !datasubmitted && (
          <input onChange={(e) => setfullname(e.target.value)} value={fullname}
            type='text' className='p-2 border border-gray-500 rounded-md focus:outline-none' placeholder='Full Name' required />
        )}
        {!datasubmitted && (
          <>
            <input onChange={(e) => setemail(e.target.value)} value={email}
              type='email' placeholder='Email Address' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
            <input onChange={(e) => setpassword(e.target.value)} value={password}
              type='password' placeholder='Password' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </>
        )}
        {
          currstate === 'Sign Up' && datasubmitted && (
            <textarea
              rows={4}
              onChange={(e) => setbio(e.target.value)}
              value={bio}
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Provide a short bio...'
              required
            />
          )
        }
        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
          {currstate === 'Sign Up' ? "Create Account" : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type='checkbox' />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col gap-2'>
          {currstate === 'Sign Up' ? (
            <p className='text-sm text-gray-600'>Already have an account?
              <span onClick={() => { setcurrstate("Login"); setdatasubmitted(false) }}
                className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
          ) : (
            <p className='text-sm text-gray-600'>Create an account <span onClick={() => setcurrstate("Sign Up")} className='font-medium text-violet-500 cursor-pointer'>Click here</span></p>
          )}
        </div>

      </form>

    </div>
  )
}

export default Loginpage