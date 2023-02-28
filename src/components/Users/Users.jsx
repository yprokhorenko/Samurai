import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} />
      <div className="div">
        {users.map((u) => (
          <User user={u} followingInProgress={props.followingInProgress} key={u.id} unfollow={props.unfollow} follow={props.follow} />
        ))}
      </div>
    </div>
  );
};

export default Users;
