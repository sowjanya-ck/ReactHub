import { useParams } from 'react-router-dom';

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);



    if (resMenu === null ) return <Shimmer/>

    const {name, cuisines, costForTwo} = resMenu.data.cards[0].card.card.info;
    const { itemCards} = resMenu?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

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