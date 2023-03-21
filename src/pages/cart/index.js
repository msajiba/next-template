import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <div>
      <h3>total cart : {cartItem.length} </h3>
    </div>
  );
};

export default cart;
