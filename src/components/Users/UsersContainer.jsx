import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize); //https://youtu.be/dtKX3JyeVts?t=1174
  }

      onPageChanged = (pageNumber) => {  //https://youtu.be/ap8HxJPwJhY?t=2925
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize) 
      }
      render() {
        return  <>
                {this.props.isFetching ? <Preloader /> : null }
                <Users totalItemsCount={this.props.totalItemsCount} //https://youtu.be/iobMksCYGHE?t=619
                              pageSize={this.props.pageSize}
                              currentPage={this.props.currentPage}
                              onPageChanged={this.onPageChanged}
                              users={this.props.users} //https://youtu.be/ceSZUZZaW30?t=2557
                              follow={this.props.follow}
                              unfollow={this.props.unfollow}
                              followingInProgress= {this.props.followingInProgress}
                      />
                </>
      }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalItemsCount: state.usersPage.totalItemsCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};


export default compose ( //https://youtu.be/iobMksCYGHE?t=374
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers}) //https://youtu.be/_LZXisuCluw?t=604  //https://youtu.be/oLIrtUrm5us?t=625 follow/unf
)(UsersContainer);