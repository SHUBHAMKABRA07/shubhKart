export const getTotalCartAmount = (all_product, cartItems) => {
  let total = 0;

  all_product.forEach((item) => {
    if (cartItems[item.id] > 0) {
      total += item.new_price * cartItems[item.id];
    }
  });

  return total;
};

export const getShippingFee = (total) => {
  return total < 30 ? 15 : 0;
};

export const promoCodes = {
  SAVE10: 10,
  SAVE20: 20,
  WELCOME15: 15,
  STUDENT25: 25,
};

export const getDiscount = (code, subtotal) => {
  const discountPercent = promoCodes[code?.toUpperCase()] || 0;

  return {
    discountPercent,
    discountAmount: (subtotal * discountPercent) / 100,
  };
};