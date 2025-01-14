
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
        </div>
    );
};

export default Post;