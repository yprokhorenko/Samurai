import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
      props.setUsers([
        {
          id: 1,
          photoUrl: "https://www.mobisafar.com/images/user.png",
          followed: false,
          fullName: "John",
          status: "nobody",
          location: { city: "Lviv", country: "Ukraine" },
        },
        {
          id: 2,
          photoUrl: "https://www.mobisafar.com/images/user.png",
          followed: true,
          fullName: "Joanna",
          status: "boss",
          location: { city: "Kyiv", country: "Ukraine" },
        },
        {
          id: 3,
          photoUrl: "https://www.mobisafar.com/images/user.png",
          followed: true,
          fullName: "Lucia",
          status: "worker",
          location: { city: "NY", country: "USA" },
        },
      ]);
    }
  return (
    <div>
      {props.users.map(u => (<div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
                { u.followed 
                    ? <button onClick={ () => {props.unfollow(u.id) } }>Unfollow</button>
                    : <button onClick={ () => {props.follow(u.id)} } >Follow</button> 
                }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
