import { Post } from "./entity/Post";
import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(async connection => {
    const posts = await connection.manager.find(Post);
    if (posts.length === 0) {
      await connection.manager.save(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => {
          return new Post({ title: `Post_${n}`, content: `我的第${n}篇博客` });
        })
      );
    }
    connection.close();
  })
  .catch(error => console.log(error));
