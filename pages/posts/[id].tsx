import { getPostIds, getPostDetail } from "lib/getPosts";
import { NextPage } from "next";

type Props = {
  post: {
    htmlContent: string;
  };
};

const PostDetail: NextPage<Props> = props => {
  const { post } = props;
  return (
    <div>
      博客详情
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent }}></div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const ids = await getPostIds();
  // console.log(ids);
  const paths = ids.map(id => ({ params: { id } }));
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps = async (x: any) => {
  const id = x.params.id;
  // console.log(id);
  const data = await getPostDetail(id);
  return {
    props: {
      post: data
    }
  };
};

export default PostDetail;
