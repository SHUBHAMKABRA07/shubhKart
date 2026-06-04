import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="item">
       <Link to={`/product/${props.id}`}> <img src={props.image} onClick={()=>window.scrollTo(0,0)} alt=""/></Link>
        <p>{props.name}</p>
        <div className="item-Prices">
            <div className="item-Price-New">
                ${props.new_price}
            </div>
            <div className="item-Price-Old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item