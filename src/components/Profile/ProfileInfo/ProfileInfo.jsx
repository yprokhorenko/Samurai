import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = (props) => {
   if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      {/* <div>
        <img src="https://www.nps.gov/pore/planyourvisit/images/pic-north-beach-sunset-amk-210104-960x320_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false" alt=""/> 
      </div> */}
      <div className={s.descriptionBlock}>
        <img className={s.descriptionPhoto} src={props.profile.photos.large || userPhoto} />
        ava + desc</div>
        {props.isOwner && <input className={s.avaInput} type ={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
