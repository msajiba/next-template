import CartRow from "@/components/cart/CartRow";
import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <div>
      <h3>total cart : {cartItem.length} </h3>
      {
        cartItem.map((cartItem, index) => {
          <
        })
      }
      <h3>cART</h3>
    </div>
  );
};

export default cart;
