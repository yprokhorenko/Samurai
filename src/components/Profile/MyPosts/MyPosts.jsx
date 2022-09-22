import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

    let posts = [
      { id: 1, message: "Hey, what do you want?", likesCount: 8 },
      { id: 2, message: "Ok, than", likesCount: 3 },
      { id: 3, message: "Don't text me plz?", likesCount: 6 },
    ];

    let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} /> );

    return (
      <div className={s.postsBlock}> <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add Post</button></div>
            </div>
            <div className={s.posts}>
              { postsElements }
            </div>;
      </div>
    )
  }

  

   export default MyPosts;