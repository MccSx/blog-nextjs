import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { getPost } from "lib/getPosts";

type Props = {
  postsList: Post[];
};

const Posts: NextPage<Props> = props => {
  return (
    <div>
      博客列表
      <ul>
        {props.postsList.map(post => (
          <li key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getPost();
  return {
    props: {
      postsList: data
    }
  };
};

export default Posts;
