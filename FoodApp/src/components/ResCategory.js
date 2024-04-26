import ItemList from "./ItemList";
const ResCategory = ({data}) =>{
    return(
        <div>
            <div className="w-6/12 m-auto bg-sky-100 my-4 shadow-lg p-4">
            <div className=" flex justify-between">
                <span className="font-semibold text-lg"> {data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div className="">
                <ItemList items = {data.itemCards}/>
            </div>

            </div>
        </div>

    )
    
}
export default ResCategory;