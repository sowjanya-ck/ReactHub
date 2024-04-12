import { useState , useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]= useState("Login");
    const onlineCheck = useOnlineStatus();
    console.log("hereder rendered");
    //if no dependedncy array then useEffect is called on every rendering.
    //if empty dependecy array present, usefecct is called on initial render(just once);
    //if we put something inside the dependcy array then , useffect is called if the dependcy array changes.
    
    useEffect(()=>{
        console.log("userEffect called");
    })
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb-5">
            <div className="logo-items">
              
                <img className="w-56" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4ddd">
                    <li className="px-4">Online status: {onlineCheck ?  "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to ="/">Home</Link></li>
                    {/* its not good way to use anchor tag, because its refreshes the whole page. */}
                    <li className="px-4">< a href="/about"> About us </a></li> 
                    <li className="px-4"><Link to="/contact-us">Contact Us</Link></li>
                    <li className="px-4"><a href="/Grocery">Grocery</a></li>
                    <li>Cart</li>
                    <button onClick={()=>{ btnName ==="Login" ?setBtnName("Logout") : setBtnName("Login");}}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header;