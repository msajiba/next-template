

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  shipping: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const Product = mongoose.models.product || mongoose.model("product", productSchema);

export default Product;
