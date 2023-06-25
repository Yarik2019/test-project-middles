import "./cardPost.css";
const CardPost = ({ post }) => {
  return (
    <div className="card-post">
      {/* <a href={post?.email}>{post?.email}</a> */}
      <h3>UserId: {post.userId}</h3>
      <div className="post-body">Body: {post.body}</div>
      <div className="post-body"> Title: {post.title}</div>
    </div>
  );
};

export default CardPost;
