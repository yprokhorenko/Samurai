import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
   if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src="https://www.nps.gov/pore/planyourvisit/images/pic-north-beach-sunset-amk-210104-960x320_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false" alt=""/> 
      </div>
      <div className={s.descriptionBlock}>
        <img className={s.descriptionPhoto} src={props.profile.photos.large} />
        ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
