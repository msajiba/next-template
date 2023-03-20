import Link from "next/link";

const ProductRow = ({ product }) => {
  const { id, name, price, img } = product;
  return (
    <Link href={`/product/${id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">
              <p>{price}</p>
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductRow;
