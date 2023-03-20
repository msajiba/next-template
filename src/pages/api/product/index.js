// import dbConnect from "../../../backend/config/dbConnect";

import dbConnect from "../../../../backend/config/dbConnect";
import { getProducts } from "../../../../backend/controllers/product";

export default async function handler(req, res) {
  dbConnect();
  if (req.method === "GET") {
    getProducts(req, res);
  }
}
