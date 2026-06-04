import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import girl from "../../assets/p8.webp"
const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Left">
        <h2>Best Deals !  Best Prices !</h2>

        <div className="Hero-Hand-Icon">
          <p>new</p>
          <img src={hand_icon} alt="" height="60px" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="Hero-Latest-Btn">
        <div>Latest collection</div>
        <img src={arrow_icon} alt="" height="30px"/>
       </div>
      </div>
      <div className="Hero-Right">
        <img src={girl} alt="" height="500px"/>
      </div>
    </div>
  )
}

export default Hero