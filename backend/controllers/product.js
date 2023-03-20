const { default: Product } = require("../models/product");

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

export const getSingleProduct = async (req, res) => {
  const id = req.query.id;
  const product = await Product.findOne({id});
  console.log(product, id);
  res.status(200).send(product);
};
