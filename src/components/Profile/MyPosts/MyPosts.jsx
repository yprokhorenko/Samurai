import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    return (
      <div className={s.postsBlock}> <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add Post</button></div>
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