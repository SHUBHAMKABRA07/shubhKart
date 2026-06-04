import React from 'react'
import "./Offer.css"
import exclu from "../../assets/exclu.webp"
const Offer = () => {
  return (
    <div className='Offers'>
        <div className="Offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="Offers-right">
            <img src={exclu} alt="" />
        </div>
    </div>
  )
}

export default Offer