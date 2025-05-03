import React, { useEffect } from 'react'
import Login from './Login'
import { Browse } from './Browse'
import {RouterProvider} from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';


const Body = () => {
    const dispatch = useDispatch();
      
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },

    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            const {uid, email,displayName,photoURL} = user;
            dispatch(addUser({uid: uid, email: email,displayName: displayName,photoURL: photoURL}));
            } else {
                dispatch(removeUser());
        
            }
        });
    }
    ,[]);


  return (
    <div>
        <RouterProvider router={appRouter}/>
        {/* <Browse/> */}
    
    </div>    
  )
}
 
export default Body