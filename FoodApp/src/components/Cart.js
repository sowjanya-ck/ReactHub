import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClear =() =>{
        dispatch(clearCart()) ; 
    }

    //  const store = useSelector((store) => store)
    //  const cartItems = store.cart.items;
    // Dont use like above, because it will re-render the whole component if any value in the store changes.

     // subscribing to store using the selector
    const cartItems = useSelector((store) => store.cart.items)
    return <div className="text-center m-4 p-4">
        <h1 className="font-bold">Cart items list </h1>
        <button className="m-2 p-1 bg-black text-white rounded-md" onClick={handleClear}>Clear cart</button>
        <div className="w-6/12 m-auto">
         {cartItems.length ===0 && (<h1> Cart is Empty. Please add items to your cart...</h1>) } 
            <ItemList items={cartItems} />
        </div>
    </div>
}

export default Cart;