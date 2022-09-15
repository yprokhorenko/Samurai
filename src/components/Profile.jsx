import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://www.nps.gov/pore/planyourvisit/images/pic-north-beach-sunset-amk-210104-960x320_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false" alt="" />

      <div>ava + desc</div>
      <div> My Posts
          <div className={s.posts}>New Post
            <div className={s.item}>Post 1</div>
            <div className={s.item}>Post 2</div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
