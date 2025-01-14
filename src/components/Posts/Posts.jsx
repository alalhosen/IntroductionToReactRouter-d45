import { useLoaderData } from "react-router-dom";
import Post from "../Contact/Post/Post";

const Posts = () => {
    const posts= useLoaderData();
  return (
    <div>
      <h2>posts: {posts.length} </h2>
      <div className="users">
        {
            posts.map(post=><Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;
