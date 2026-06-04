import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import minusicon from "../../assets/minusicon.jpg";
import plusicon from "../../assets/plusicon.jpg";

import {
  getTotalCartAmount,
  getShippingFee,
  getDiscount,
} from "../../Pages/CartUtils";

const CartItems = () => {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const { all_product, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  const subtotal = getTotalCartAmount(all_product, cartItems);
  const shippingFee = getShippingFee(subtotal);
  const { discountPercent, discountAmount } = getDiscount(
    appliedCode,
    subtotal,
  );
  const finalTotal = subtotal + shippingFee - discountAmount;
  const applyPromo = () => {
    setAppliedCode(promoCode);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Increase Quantity</p>
        <p>Reduce Quantity</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" height="100px" className="" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  src={plusicon}
                  alt=""
                  height="20px"
                  onClick={() => addToCart(e.id)}
                />
                <img
                  src={minusicon}
                  alt=""
                  height="20px"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>{shippingFee === 0 ? "Free" : `$${shippingFee}`}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Discount ({discountPercent}%)</p>
              <p>-${discountAmount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${finalTotal}</p>
            </div>
          </div>

          <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            
            <button onClick={applyPromo}>Apply</button>
            
          </div>
          <p className="promo-status">
              {discountPercent > 0
                ? `Promo code applied! ${discountPercent}% off`
                : appliedCode
                  ? "Invalid promo code"
                  : ""}
            </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
