import React from 'react'
import "./ProductDisplay.css"
import star from "../../assets/star.jpg"
import half_star from "../../assets/half_star.jpg"
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'
const ProductDisplay = (props) => {
    const {product}=props
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
            </div>
            <div className='productdisplay-img'>
                <img src={product.image} alt="" height="300px"/>
            </div>
        </div>
        <div className="productdisplay-right">
        <div className='productdisplaytitleandrating'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star} alt="" height="25px"/>
            <img src={star} alt="" height="25px"/>
            <img src={star} alt="" height="25px"/>
            <img src={star} alt="" height="25px"/>
            <img src={half_star} alt="" height="25px"/>
            <p>(130)</p>
        </div>    
        </div>
        <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
        ${product.old_price}
        </div>
        <div className="productdisplay-right-price-new">
        ${product.new_price}
        </div>
        </div>
        <div className="productdisplay-right-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam placeat quidem consectetur ea ipsum nisi perferendis doloribus suscipit. Atque id voluptatum adipisci vel facere eos accusantium eum cupiditate omnis?</div>
        
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <div className="productdisplay-right-category">
                <span>Category:<span>Women , T-Shirt, Crop Top</span></span>
            </div>
            <div className="productdisplay-right-category">
                <span>Tags:<span>Modern , Latest, Trend Shorts</span></span>
            </div>
        
        </div>
    </div>
  )
}

export default ProductDisplay