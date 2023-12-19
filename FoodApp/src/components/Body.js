import ResCard from "./ResCard"; 

import { resList } from "../utils/mockData";


const Body =()=>{
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
               {
                resList.map((res) => <ResCard key={res.info.id} resData={res}/>)
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