import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div >
         <div>
            <img src="https://www.nps.gov/pore/planyourvisit/images/pic-north-beach-sunset-amk-210104-960x320_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false"alt=""/>
         </div>
        <div>ava + desc</div>
        <div><MyPosts/></div>
    </div>
  );
};

export default Profile;
