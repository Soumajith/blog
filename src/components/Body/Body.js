import React, { useEffect, useState } from "react";
import usePost from "../../utils/usePost";
import { IMG_CDN } from "../../utils/helper";
import PostCard from "./PostCard";
import "./Body.css";

const Body = () => {
  const getPosts = usePost();
  // console.log(getPosts);
  const [allPost, setAllPost] = useState(null);

  useEffect(() => {
    setAllPost(getPosts);
  }, [getPosts]);

  // if (allPost) {
  //   const featuredPost = allPost[0];
  //   // setAllPost(allPost.shift());
  // }
  console.log(allPost);

  return (
    <>
      {allPost ? (
        <div className="container-body">
          <div className="hero-section">
            <div className="left-section">
              <img src={allPost[0]?.imageUrl} className="hero-image" />
            </div>
            <div className="right-section">
              <h2 className="head-text">{allPost[0]?.title}</h2>
              <p className="head-para .text-overflow-clamp">
                {allPost[0]?.body.slice(0, 150) + "..."}
              </p>
            </div>
          </div>
          <h3 className="inbetween-text">Latest Posts</h3>
          <div className="blogs">
            {allPost.map((post) => (
              <PostCard {...post} key={post._id} />
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Body;
