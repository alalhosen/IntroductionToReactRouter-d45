import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title}=post;

    const postStyle = {
        border: "2px solid lime",
        padding: "5px",
        borderRadius: "20px",
      };
    return (
        <div style={postStyle}>
            <h2>Post of id:{id}</h2>
            <p>title:{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default Post;