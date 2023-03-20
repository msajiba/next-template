// import dbConnect from "../../../backend/config/dbConnect";

import dbConnect from "../../../../backend/config/dbConnect";
import { getSingleProduct } from "../../../../backend/controllers/product";

export default async function handler(req, res) {
  dbConnect();
  if (req.method === "GET") {
    getSingleProduct(req, res);
  }
}
