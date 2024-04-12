import { RES_URL } from "../utils/constants";
const ResCard =(props)=>{
   const {resData}=props;
   const {name,cuisines,avgRating,costForTwo}=resData?.info;
   
    return (
        <div className="m-4 p-2 w-[200px] bg-gray-100 rounded-lg" >
            
            <img className="rounded-lg" alt="res-logo" src={RES_URL+resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
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


// const Body =()=>{
//     return(
//         <div className="body">
//             <div className="search"> Search </div>
//             <div className="res-container">
//                 <ResCard resName="McDonald's" cuisine="burgers,cafe" rate="4.3" time="20min"/>
//                 <ResCard resName="Meghana foods" cuisine="Biriyani,NorthIndian" rate="4.3" time="20min"/>
//                 <ResCard resName="KFC" cuisine="burger , Fast food" rate="4.3" time="20min"/>
//                 <ResCard resName="Nandana palace" cuisine="Biriyani,SouthIndian" rate="4.4" time="50min"/>
//                 <ResCard resName="cafe amudhan" cuisine="Snacks,NorthIndian" rate="4.1" time="10min"/>
//                 <ResCard resName="NH1 bowls" cuisine="Highway to NorthIndian" rate="4.5" time="20min"/>
//                 <ResCard resName="Dominos" cuisine="Pizza,desserts" rate="4.3" time="35min"/>
//                 <ResCard resName="Pizza hut" cuisine="pizza,beverages, desserts" rate="3.9" time="10min"/>
//                 <ResCard resName="Nic icecreams" cuisine="ice creams,desserts" rate="4.1" time="40min"/>

                
//             </div>
//         </div>
//     )
// }

export default ResCard;