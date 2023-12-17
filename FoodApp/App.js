
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
const ResCard =(props)=>{
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor:"#FFFDEF"}}>
            
            <img className="reslogo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
            <h3>{props.resName}</h3>
            <h4> {props.cuisine}</h4>
            <h4>{props.rate}</h4>
            <h4>{props.time}</h4>
        </div>
    )

}
// destrucring the props, this will give the same result as above
// const ResCard =({resName,rate,time,cuisine})=>{
    
//     return (
//         <div className="res-card" style={{backgroundColor:"#FFFDEF"}}>
            
//             <img className="reslogo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
//             <h3>{resName}</h3>
//             <h4> {cuisine}</h4>
//             <h4>{rate}</h4>
//             <h4>{time}</h4>
//         </div>
//     )

// }
const Body =()=>{
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                <ResCard resName="McDonald's" cuisine="burgers,cafe" rate="4.3" time="20min"/>
                <ResCard resName="Meghana foods" cuisine="Biriyani,NorthIndian" rate="4.3" time="20min"/>
                <ResCard resName="KFC" cuisine="burger , Fast food" rate="4.3" time="20min"/>
                <ResCard resName="Nandana palace" cuisine="Biriyani,SouthIndian" rate="4.4" time="50min"/>
                <ResCard resName="cafe amudhan" cuisine="Snacks,NorthIndian" rate="4.1" time="10min"/>
                <ResCard resName="NH1 bowls" cuisine="Highway to NorthIndian" rate="4.5" time="20min"/>
                <ResCard resName="Dominos" cuisine="Pizza,desserts" rate="4.3" time="35min"/>
                <ResCard resName="Pizza hut" cuisine="pizza,beverages, desserts" rate="3.9" time="10min"/>
                <ResCard resName="Nic icecreams" cuisine="ice creams,desserts" rate="4.1" time="40min"/>

                
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