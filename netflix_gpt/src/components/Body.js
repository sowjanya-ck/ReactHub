import React from 'react'
import Login from './Login'
import { Browse } from './Browse'
import {RouterProvider} from "react-router-dom"


const Body = () => {
    const appRouter = createBrowswerReact([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },

    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
        <Browse/>
    
    </div>    
  )
}
 
export default Body