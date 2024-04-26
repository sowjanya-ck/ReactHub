const ItemList = ({items}) => {
    console.log("sowj")
    console.log(items);
    return(
        <div>
            <ul>
                {items.map((item)=>(
                    <div key = {item.card.info.id} className="m-2 p-2  border-blue-300 border-b-2 text-left">
                        <img></img>
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100   }</span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                ))}
            </ul>

        </div>
    )
}

export default ItemList;