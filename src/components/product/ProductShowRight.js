import { addToCart } from "@/redux/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductShowRight = ({ product }) => {
  const dispatch = useDispatch();

  const {_id, name, price, category, img, quantity, ratings, stock } = product;
  const [orderQuantity, setOrderQuantity] = useState(quantity);

  const addToCartHandler = async () => {
    const cartProduct = { _id, name, price, category, img, orderQuantity,quantity, ratings };
   dispatch(addToCart(product));
    
  };

  return (
    <div className="text-center lg:text-left">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-full" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary w-52">Stoke : {stock}</div>
          </h2>
          <div className="card-actions flex justify-end">
            <div className="badge badge-outline">Category : {category} </div>
            <div className="badge badge-outline">Ratting : {ratings} </div>
            <div className="badge badge-outline  bg-primary">
              Price : {price}
            </div>
          </div>
        </div>
        <div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Quantity : </span>
            </label>
            <input
              onChange={(e) => setOrderQuantity(e.target.value)}
              type="number"
              defaultValue={quantity}
              className="input input-bordered w-20 "
            />
          </div>

          <button
            onClick={addToCartHandler}
            className="tn btn-md btn-secondary w-full"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowRight;
