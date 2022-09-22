import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

    let postData = [
      { id: 1, message: "Hey, what do you want?", likesCount: 8 },
      { id: 2, message: "Ok, than", likesCount: 3 },
      { id: 3, message: "Don't text me plz?", likesCount: 6 },
    ];


    return (
      <div className={s.postsBlock}> <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add Post</button></div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
            </div>;
      </div>
    )
  }

  

   export default MyPosts;