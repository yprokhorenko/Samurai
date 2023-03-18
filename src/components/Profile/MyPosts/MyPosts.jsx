import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} /> );

    // let newPostElement = React.createRef ();

    // let onAddPost = (values) => {
    //   props.addPost(values.newPostText);
    // }
    let onAddPost = (values) => {
      props.addPost(values);
    }

    return (
      <div className={s.postsBlock}> <h3>My Posts</h3>
            <div>
                <ProfileForm onAddPost={onAddPost} />
            </div>
            <div className={s.posts}>
              { postsElements }
            </div>;
      </div>
    )
  }

  
  const ProfileForm = (props) => {
   
    return (
      <Formik
      initialValues={{ newPostText: "" }}
      validationSchema={Yup.object({
        newPostText: Yup.string()
          .min(1, "Must be 1 characters or more")
          .max(200, "Must be 200 characters or less")
          .required("")
      })}
      
      onSubmit={(values, onSubmitProps) => {
        props.onAddPost(values.newPostText); 
        console.log(values);
        onSubmitProps.resetForm();
      }}
      >
        <Form>
          <div>
            <Field
              as={"textarea"}
              name={"newPostText"}
              placeholder={"Enter your message"}
            />
            <div className={s.textError}>
              <ErrorMessage name="newPostText" />
            </div>
        
          </div>
          <div>
            <button type='submit'>Add Post</button>
          </div>
        </Form>
      </Formik>
    );
  };

   export default MyPosts;