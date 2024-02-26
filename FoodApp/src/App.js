
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import  {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';



const Applayout = () =>{
    return (
       <div className="app">
        <Header/>
        <Outlet/> 
       </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<Applayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact-us",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:redId", // here :resId is dynamic
                element: <RestaurantMenu/>,
            },

        ],
        errorElement: <Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);