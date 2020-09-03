import { NextApiHandler } from "next";
import getPost from "lib/getPosts";

const post: NextApiHandler = async (req, res) => {
  const postData = await getPost();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(postData);
};

export default post;
