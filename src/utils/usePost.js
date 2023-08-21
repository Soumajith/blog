// import axios from "axios";
import { URL } from "./helper";
import { useEffect, useState } from "react";
const usePost = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(URL + "/api/v1/posts");
      //   const response = await axios.get(URL + "/api/v1/posts");
      const result = await response.json();

      // console.log(result.post);
      setPost(result.post);
    } catch (err) {
      console.log(err);
    }
  };
  return post;
};

export default usePost;
