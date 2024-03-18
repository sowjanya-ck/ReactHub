import ResCard from "./ResCard"; 

import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatuus from "../utils/useOnlineStatus";

const Body =()=>{
    // const [listofRestaurants,setListofRestaurant]=useState(resList);
    // now we dont need mockdata 
    const [listofRestaurants,setListofRestaurant]=useState([]);
    const [filteredRestaurant,setFileteredRestaruant]=useState([]);
    
    const[searchText,setSeachText]=useState("");

    useEffect(()=>{
        console.log("this will render after the body component renders");
        fetchData();

    },[]);
    //       whnerver a state variable gets update, react triggers a reconcilation cycle.(re-renders the componennet)

    console.log("first called");
    const fetchData=async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.3408807&lng=74.7421427&page_type=DESKTOP_WEB_LISTING");
        const convertJson= await data.json();
        setListofRestaurant(convertJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFileteredRestaruant(convertJson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(convertJson);
    };
    // if (listofRestaurants.length ===0) {
    //     return <Shimmer/>
    // }

    const onlineStatus = useOnlineStatuus();

    if (!onlineStatus) 
        return <h1>You're offline. Please connect to the internet.</h1>;
    
    else if(listofRestaurants.length ===0)
        return <Shimmer/>
    
     else 
    return(
       
        <div className="body">
           
            <div className="filter" style={{display:"flex"}}> 
                <div className="search" >
                    <input type="text" className="search_box" value={searchText} onChange={(e)=>{setSeachText(e.target.value)}} />
                    <button onClick={()=>{
                        const filterSearchRestaurant = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFileteredRestaruant(filterSearchRestaurant);

                        }} > search</button>

                </div>
                <button className="filter-btn" onClick={()=>{
                    console.log("clickeddd");

                    const filterdRes=listofRestaurants.filter((res)=>res.info.avgRating>4.5);
                    setListofRestaurant(filterdRes);
                    
                }}>Top-rated restaurants</button>
            </div>
            <div className="res-container">
               {
                filteredRestaurant.map((res) => 
                <Link key= {res.info.id} to={"/restaurants/"+res.info.id}><ResCard resData={res}/></Link>
                )
               }
               {/* <ResCard resData={resList[1]}/>
                <ResCard resData={resList[2]}/>
                <ResCard resData={resList[3]}/>
                <ResCard resData={resList[4]}/> */}
          {/* we can reduce this code by using map.  */}
               
        
            </div>
        </div>
    )
}
export default Body;