
import React from "react";
import ReactDOM from "react-dom/client";
/* 
# Header
    -logo
    -nav items
        -about home etc links
# Body
    -Search
    -RestaurantContainer
        -RestarantCard
#Footer
    -Copyright
    -address
    -contact
    -links
*/

const Applayout = () =>{
    return (
        <h1> food</h1>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout/>)