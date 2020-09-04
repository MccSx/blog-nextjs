import { NextApiHandler } from "next";

const post: NextApiHandler = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ name: "jack" });
};

export default post;
