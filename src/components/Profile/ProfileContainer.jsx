import React from "react";
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Navigate, useParams} from 'react-router-dom';
import { compose } from "redux";



function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

        class ProfileContainer extends React.Component {

          // refreshProfile() {
          //   let userId = this.props.match.params.userId;
          //   if (!userId) {
          //     userId = this.props.authorizedUserId;
          //     if (!userId) {
          //       this.props.history.push("/login")
          //     }
          //   }
          //     this.props.getUserProfile(userId);
          //     this.props.getStatus(userId);
          // }

          // componentDidMount() {
          //   this.refreshProfile();
          // }
          // componentDidUpdate(prevProps, prevState, snapshot) {
          //   if (this.props.match.params.userId != prevProps.match.params.userId) {
          //     this.refreshProfile();
          //   }
          // }

                  refreshProfile() {
                    let userId = this.props.match.params.userId;
                     if(!userId) {userId = this.props.authorizedUserId}
                    this.props.getUserProfile(userId);
                    this.props.getStatus(userId);
                }

                componentDidMount() {
                    this.refreshProfile();
                }

                componentDidUpdate(prevProps){
                    // if(this.props.isMain !== prevProps.isMain) {
                    //     if(this.props.isMain){
                    //         this.refreshProfile();
                    //     }
                    // }
                    if (this.props.match.params.userId !=prevProps.match.params.userId) {
                      this.refreshProfile();
                    }
                }

  render() {
    if (!this.props.isAuth && !this.props.userId) {
      return <Navigate to={'/login'} />
   }
    return <Profile {...this.props} 
                    isOwner = {!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    profile={this.props.profile}
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status:  state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter
)(ProfileContainer);
