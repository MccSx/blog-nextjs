import { Post } from "./entity/Post";
import "reflect-metadata";
import { createConnection } from "typeorm";
// import { User } from "./entity/User";

createConnection()
  .then(async connection => {
    const posts = await connection.manager.find(Post);
    const p = new Post();
    p.title = "post_1";
    p.content = "我的第一篇博客";
    await connection.manager.save(p);
    const posts2 = await connection.manager.find(Post);
    console.log(posts2);
    connection.close();
  })
  .catch(error => console.log(error));
