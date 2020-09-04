// import { NextApiHandler } from "next";
import fs, { promises as fsPromise } from "fs";
import path from "path";
import marked from "marked";
import matter from "gray-matter";

const markdownDir = path.join(process.cwd(), "markdown");

export const getPost = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  const data = fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/g, "");
    const text = fs.readFileSync(fullPath, "utf-8");
    const {
      data: { title, date }
    } = matter(text);
    return { id, title, date };
  });
  return data;
};

export const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  // const data = fileNames.map(fileName => {
  //   const id = fileName.replace(/\.md$/g, "");
  //   return { id };
  // });
  // return data;
  return fileNames.map(fileName => fileName.replace(/\.md$/g, ""));
};

export const getPostDetail = async (id: string) => {
  const fullPath = path.join(markdownDir, id + ".md");
  const text = fs.readFileSync(fullPath, "utf-8");
  const htmlContent = marked(matter(text).content);
  return { htmlContent };
};
