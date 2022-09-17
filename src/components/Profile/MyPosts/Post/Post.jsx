import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://picsum.photos/200/200" alt="" />
      <span>Like</span>
    </div>
  );
};

export default Post;
