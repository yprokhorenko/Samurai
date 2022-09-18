import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return ( <div>
        <div className={s.item}>
          <img src="https://picsum.photos/200/200" alt="" />
        {props.message}
        </div>
        <span>Likes:{props.likes}</span>
    </div>
  );
};

export default Post;
