import { useParams } from 'react-router-dom';

import Shimmer from "./Shimmer";
import ResCategory from './ResCategory';
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);



    if (resMenu === null ) return <Shimmer/>
    console.log("started resme");

    const {name, cuisines, costForTwo} = resMenu.data.cards[2].card.card.info;
    const { itemCards} = resMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    const cardCategories = resMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(cardCategories);
    return (
        <div className="text-center">
            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <p className='font-bold text-lg'>{cuisines.join(",")}</p>
            
        {cardCategories.map((category) => (
                <ResCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
                />
        ))}
        </div>
    )
}
export default RestaurantMenu;