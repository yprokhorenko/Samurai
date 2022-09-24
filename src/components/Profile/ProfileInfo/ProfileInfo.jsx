import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://www.nps.gov/pore/planyourvisit/images/pic-north-beach-sunset-amk-210104-960x320_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false" alt=""/> 
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
