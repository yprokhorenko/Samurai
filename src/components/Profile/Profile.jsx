import React from "react";
// import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
          isOwner={props.isOwner}
          savePhoto={props.savePhoto}
          profile={props.profile} //https://youtu.be/MM02LsZqssQ?t=1907
          status={props.status}
          updateStatus={props.updateStatus}
          saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
