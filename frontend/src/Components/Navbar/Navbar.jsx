import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import {Link} from "react-router-dom"
const Navbar=()=>{
    const [menu,setMenu]=useState("home");
    return(
        <div className="Navbar">
            <div className="Nav-logo">
                <img src={logo} alt="" height="50px"></img>
                <p>ShubhKART</p>
            </div>
            <ul className="Nav-menu">
                <hr/>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",color: "rgb(210, 20, 20)"}} to="/">Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color: "rgb(210, 20, 20)"}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color: "rgb(210, 20, 20)"}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color: "rgb(210, 20, 20)"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                <hr/>
            </ul>
            <div className="Nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" height="40px"/></Link>
                <div className="Nav-cart-count">0</div>
            </div>
        </div>
    )
    
}
export default Navbar