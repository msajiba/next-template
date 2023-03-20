import Loader from "@/components/Loader";
import ProductRow from "@/components/product/ProductRow";
import { fetchProducts } from "@/redux/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const products = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="md:mx-20 mx-10">
      {isLoading && <Loader />}
      {error && <p className="text-error"> {error} </p>}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 my-10">
        {products.map((product) => {
          return <ProductRow key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default products;
