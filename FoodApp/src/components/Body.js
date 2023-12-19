import ResCard from "./ResCard"; 

import { resList } from "../utils/mockData";
import { useState } from "react";


const Body =()=>{
    const [listofRestaurants,setListofRestaurant]=useState(resList);
    return(
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" onClick={()=>{
                    console.log("clickeddd");

                    const filterdRes=listofRestaurants.filter((res)=>res.info.avgRating>4.5);
                    setListofRestaurant(filterdRes);
                    
                }}>Top-rated restaurants</button>
            </div>
            <div className="res-container">
               {
                listofRestaurants.map((res) => <ResCard key={res.info.id} resData={res}/>)
               }
               <ResCard resData={resList[1]}/>
                <ResCard resData={resList[2]}/>
                <ResCard resData={resList[3]}/>
                <ResCard resData={resList[4]}/>
          {/* we can reduce this code by using map.  */}
               
        
            </div>
        </div>
    )
}
export default Body;