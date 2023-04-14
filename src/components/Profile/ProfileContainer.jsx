import React from "react";
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Navigate, useParams} from 'react-router-dom';
import { compose } from "redux";



function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {   //https://youtu.be/MM02LsZqssQ?t=712

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
                    let userId = this.props.match.params.userId; //https://youtu.be/e6SpHkb0E3I?t=1159   //https://youtu.be/GFN1D81sBEw?t=1882
                     if(!userId) {userId = this.props.authorizedUserId}
                    this.props.getUserProfile(userId); //https://youtu.be/18hAMlMkQks?t=278
                    this.props.getStatus(userId); //https://youtu.be/1faxVHNBnsU?t=692
                }

                componentDidMount() {
                    this.refreshProfile();
                }

                componentDidUpdate(prevProps){ //https://youtu.be/wcwG-pofoZk?t=337
                    // if(this.props.isMain !== prevProps.isMain) { //https://youtu.be/wcwG-pofoZk?t=657
                    //     if(this.props.isMain){
                    //         this.refreshProfile();
                    //     }
                    // }
                    if (this.props.match.params.userId !=prevProps.match.params.userId) {  //https://youtu.be/fnzO0U1mSb8?t=706
                      this.refreshProfile(); 
                    }
                }

  render() {
    if (!this.props.isAuth && !this.props.userId) { //https://youtu.be/_X3dVadZp2U?t=595
      return <Navigate to={'/login'} />
   }
    return <Profile {...this.props} 
                    isOwner = {!this.props.match.params.userId} //https://youtu.be/fnzO0U1mSb8?t=869
                    savePhoto={this.props.savePhoto}
                    profile={this.props.profile}
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}/>; //https://youtu.be/1faxVHNBnsU?t=1172
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, //https://youtu.be/MM02LsZqssQ?t=1766
  status:  state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth //https://youtu.be/_X3dVadZp2U?t=595
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter //https://youtu.be/e6SpHkb0E3I?t=844
)(ProfileContainer);

//https://youtu.be/wcwG-pofoZk?t=609 setState in CompDidUpdate. setState мають завжди бути всередині умови.
// Navigate (Redirect) через history.push  https://youtu.be/GFN1D81sBEw?t=2171 , перемотати хв 5-10 раніше