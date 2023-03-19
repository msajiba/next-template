import dbConnect from "../../../backend/config/dbConnect";
import User from "../../../backend/models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  dbConnect();
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log(email, password);

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.send("User already exist");
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      password: cryptedPassword,
    });
    const result = await newUser.save();

    res.status(200).send(result);
  }
}
