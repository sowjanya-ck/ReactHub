import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import {checkEmailValidate} from "../utils/validation"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from '../utils/firebase'
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [issignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  // useref helps to the reference to th input field
  const handlesignInform = () => {
    setIsSignInForm(!issignInForm)
  }
  const handleButtonClick = () => {
    const message = checkEmailValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    // if no error message then we can proceed to sign in or sign up

    if(!issignInForm) {
      console.log("Sign Up");
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // if its sunccessful then we can get the user credential
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://thumbs.dreamstime.com/b/solitary-gentoo-penguin-stands-gracefully-icy-landscape-surrounded-soft-pastel-backdrop-enhances-its-striking-345021648.jpg"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
            setErrorMessage(error.message);
           
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
    else{

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });

    }


  
  }

  return (
<div className=''>
  <Header/>
    <div className='absolute '>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg" alt="Netflix Logo"/>
    </div>

    <form onSubmit={(e) => e.preventDefault()} className='w-3/12 p-12 bg-black my-36 absolute mx-auto right-0 left-0 text-white rounded-md bg-opacity-70' >
    <h1 className='text-2xl font-bold py-4'>{issignInForm ? "Sign In" : "Sign Up"}</h1>
     {!issignInForm ? <input type='text' ref={name} placeholder='Username' className='p-4 my-2 w-full bg-zinc-900 rounded-sm'/> : null}
      <input ref ={email} type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-zinc-900 rounded-sm'/>
      <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-zinc-900 rounded-sm'/>
      <p className='text-red-500 font-thin font-sm p-1'>{errorMessage}</p>
      <button className='p-4 my-6 w-full bg-red-700 rounded-sm' onClick={handleButtonClick}>{issignInForm ? "Sign In" : "Sign Up"}</button>

      <p className='py-4 cursor-pointer' onClick={handlesignInform}>{issignInForm ? "New to NetFlix ? Sign up" :  "Already registered? Sign in Now" }</p>

    </form>
</div>    
  )
}

export default Login