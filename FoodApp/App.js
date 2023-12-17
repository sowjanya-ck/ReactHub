
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
            -img,
            - name of restaurant, start rating,cuisine, delivery time
#Footer
    -Copyright
    -address
    -contact
    -links
*/
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-items">
              
                <img className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}
const ResCard =()=>{
    return (
        <div className="res-card" style={{backgroundColor:"#FFFDEF"}}>
            
            <img className="reslogo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
            <h3>McDonald's</h3>
            <h4> Burgers, beverages, cafe</h4>
            <h4>4.4 rating</h4>
            <h4>30 minutes</h4>
        </div>
    )

}
const Body =()=>{
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/> 
                <ResCard/>
                <ResCard/>
                <ResCard/>
                
            </div>
        </div>
    )
}
const Applayout = () =>{
    return (
       <div className="app">
        <Header/>
        <Body/>
       </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout/>)