import Loader from "@/components/Loader";
import ProductShowRight from "@/components/product/ProductShowRight";
import { fetchSingleProduct } from "@/redux/productSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  const { product, isLoading, error } = useSelector((state) => state.products);

  const { name, price, category, img, quantity, ratings, stock } = product;

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);


  return (
    <div className="hero min-h-screen bg-base-200">
      {isLoading && <Loader />}
      {error && <p className="text-error"> {error} </p>}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <ProductShowRight product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
