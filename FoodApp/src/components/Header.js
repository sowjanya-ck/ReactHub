import { useState , useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    const [btnName,setBtnName]= useState("Login");
    console.log("hereder rendered");
    //if no dependedncy array then useEffect is called on every rendering.
    //if empty dependecy array present, usefecct is called on initial render(just once);
    //if we put something inside the dependcy array then , useffect is called if the dependcy array changes.
    
    useEffect(()=>{
        console.log("userEffect called");
    })
    return(
        <div className="header">
            <div className="logo-items">
              
                <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>{ btnName ==="Login" ?setBtnName("Logout") : setBtnName("Login");}}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header;