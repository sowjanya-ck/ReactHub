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
        'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=61790&catalog_qa=undefined&submitAction=ENTER'
    );
    const menujson = await data.json();
    console.log(menujson);

    setResMenu(menujson);
};
if (resMenu === null ) return <Shimmer/>

const {name, cuisines, costForTwo} = resMenu?.data?.cards[2]?.card?.card?.info;
const { itemCards} = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

console.log({itemCards});

    return (
        <div className="resMenu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <ul>
                <li>{costForTwo/100}- cost for two</li>

                <h3>Restaurants menu</h3>
                {itemCards.map(item => 
                <li key = {item.card.info.id}>
                    {item.card.info.name} -{"Rs."} {item.card.info.price/100}</li>
                )}
                {/* {itemCards.map(item => item.card.info.name)} */}
                {/* <li>{itemCards[0].card.info.name}</li>  destructing it like this and then map it */} 
            </ul>
        </div>
    )
}
export default RestaurantMenu;