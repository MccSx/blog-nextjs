// import { NextApiHandler } from "next";
import fs, { promises as fsPromise } from "fs";
import path from "path";
import matter from "gray-matter";

const getPost = async () => {
  const markdownDir = path.join(process.cwd(), "markdown");
  const fileNames = await fsPromise.readdir(markdownDir);
  const xxx = fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/g, "");
    const text = fs.readFileSync(fullPath, "utf-8");
    const {
      data: { title, date },
      content
    } = matter(text);
    return { id, title, date };
  });
  return xxx;
};

export default getPost;
