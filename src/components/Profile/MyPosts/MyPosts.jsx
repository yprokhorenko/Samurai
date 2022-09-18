import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    return (
      <div> My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post likes="8" message="Hey, what do you want?" />
                <Post likes="3" message="Ok, than" />
                <Post likes="6" message="Don't text me plz" />
            </div>;
      </div>
    )
  }

  

   export default MyPosts;