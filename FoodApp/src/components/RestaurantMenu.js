import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{

    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();

    },[]);

const fetchMenu = async () => {
    console.log("hiiii")
    const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const menujson = await data.json();
    console.log(menujson);

    setResMenu(menujson);
};
const restaurantInfo = resMenu?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

// const {resname,cuisines } = resMenu?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    return resMenu === null ? (
        <Shimmer/>):(
        <div className="resMenu">
            <h1>{restaurantInfo.name}</h1>
            <h2>{restaurantInfo.cuisines}</h2>
            <ul>
                <li>{restaurantInfo.costForTwo}</li>
                <li>Biriyani</li>
                <li>Burgres</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;