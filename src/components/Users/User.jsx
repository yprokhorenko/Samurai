import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../../src/assets/images/user.png';
import {NavLink} from "react-router-dom";


let User = ({user, unfollow, follow, followingInProgress}) => {
    return ( 
    <div>
    
          <span>
            <div>  //https://youtu.be/MM02LsZqssQ?t=277
              <NavLink to={'/profile/' + user.id}> 
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
              </NavLink>
            </div>
            <div>
                { user.followed ? 
                          <button disabled={followingInProgress.some(id => id === user.id)}  //https://youtu.be/ceSZUZZaW30?t=2965  //https://youtu.be/iobMksCYGHE?t=805
                                  onClick={ () => {unfollow(user.id) }}>Unfollow</button> //https://youtu.be/oLIrtUrm5us?t=625  //https://youtu.be/oLIrtUrm5us?t=729
                              
                         : <button disabled={followingInProgress.some(id => id === user.id)}  //https://youtu.be/iobMksCYGHE?t=374 //https://youtu.be/iobMksCYGHE?t=1196
                                  onClick={ () => {follow(user.id) }}>Follow</button>} //https://youtu.be/oLIrtUrm5us?t=868
                                                   
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        
      
    </div>
    )
                }
export default User;
