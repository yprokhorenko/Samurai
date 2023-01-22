import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from "redux-form";


let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newPostText" component="textarea" />
        </div>
        <div>
          <button>Add Post</button>
        </div>
    </form>
  );
};

let AddNewFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} /> );

    let newPostElement = React.createRef ();

    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    }

    return (
      <div className={s.postsBlock}> <h3>My Posts</h3>
            <div>
              <AddNewFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
              { postsElements }
            </div>;
      </div>
    )
  }

  

   export default MyPosts;