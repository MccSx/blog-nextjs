import Router from "next/router";

function FirstPost() {
  const yyy = () => {
    Router.push("/");
  };

  return <div onClick={yyy}>first_post</div>;
}

export default FirstPost;
