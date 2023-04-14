import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
// import * as Yup from "yup";


const ProfileInfo = ({profile,isOwner,savePhoto,updateStatus, saveProfile, status, error,...props}) => {
  let [editMode, setEditMode] = useState(false); //https://youtu.be/-tDhjScH_0s?t=920

      if (!profile) { //https://youtu.be/MM02LsZqssQ?t=2070
        return <Preloader />;
      }

      const onMainPhotoSelected = (e) => { //https://youtu.be/fnzO0U1mSb8?t=1113
        if (e.target.files.length) {
          savePhoto(e.target.files[0]);
        }
      };

  
  return (
    <div> 
      <div className={s.descriptionBlock}>  //https://youtu.be/fnzO0U1mSb8?t=173
        <img className={s.descriptionPhoto} src={profile.photos.large || userPhoto} />ava + desc
      </div>
        {isOwner && <input className={s.avaInput} type ={"file"} onChange={onMainPhotoSelected} />} //https://youtu.be/fnzO0U1mSb8?t=869
        {editMode ?  //https://youtu.be/-tDhjScH_0s?t=920
            <ProfileDataForm  initialValues={profile}  profile={profile}  saveProfile={saveProfile} setEditMode={setEditMode} /> : //https://youtu.be/-tDhjScH_0s?t=2682 itinVal
            <ProfileData  profile={profile} saveProfile={saveProfile} goToEditMode={ () => {setEditMode(true)}} isOwner={isOwner}/> }
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/> 
    </div>
  );
};

const ProfileData = ({profile,goToEditMode,isOwner,...props}) => {
  return (
    <div className={s.profileData}>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>} {props.error} //https://youtu.be/-tDhjScH_0s?t=1105
    <div> <b>Full name</b> : {profile.fullName} </div>
    <div> <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"} </div>
    {profile.lookingForAJob && <div> <b>My skills</b> : {profile.lookingForAJobDescription} </div>}
    <div> <b>About Me</b> : {profile.aboutMe} </div>
    
    <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => { //https://youtu.be/-tDhjScH_0s?t=559
           return  <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })};
    </div>
</div>
  );
}; 

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  )
};

export default ProfileInfo;
