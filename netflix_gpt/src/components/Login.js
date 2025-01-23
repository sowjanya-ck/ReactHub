import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [issignInForm, setIsSignInForm] = useState(true)
  const handlesignInform = () => {
    setIsSignInForm(!issignInForm)
  }

  return (
<div className=''>
  <Header/>
    <div className='absolute '>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg" alt="Netflix Logo"/>
    </div>

    <form className='w-3/12 p-12 bg-black my-36 absolute mx-auto right-0 left-0 text-white rounded-md bg-opacity-70' >
    <h1 className='text-2xl font-bold py-4'>{issignInForm ? "Sign In" : "Sign Up"}</h1>
     {!issignInForm ? <input type='text' placeholder='Username' className='p-4 my-2 w-full bg-zinc-900 rounded-sm'/> : null}
      <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-zinc-900 rounded-sm'/>
      <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-zinc-900 rounded-sm'/>
      <button className='p-4 my-6 w-full bg-red-700 rounded-sm'>{issignInForm ? "Sign In" : "Sign Up"}</button>

      <p className='py-4 cursor-pointer' onClick={handlesignInform}>{issignInForm ? "New to NetFlix ? Sign up" :  "Already registered? Sign in Now" }</p>

    </form>
</div>    
  )
}

export default Login