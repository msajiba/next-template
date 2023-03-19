import { getServerSession } from "next-auth/next";
import dbConnect from "../../../backend/config/dbConnect";
import User from "../../../backend/models/user";
import { authOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  dbConnect();
  if (session) {
    const users = await User.find();

    res.send(users);
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
