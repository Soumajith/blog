const PostCard = ({ imageUrl, title, body }) => {
  return (
    <div className="post-card">
      <img src={imageUrl} className="blogs-image" />
      <div className="small-card">
        <h5 className="card-title">{title}</h5>
        <p className="card-para">{body.slice(0, 50) + "..."}</p>
      </div>
    </div>
  );
};

export default PostCard;
