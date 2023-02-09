import React from "react";
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
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
                  redirectToMainUser() {
                    let userId = this.props.match.params.userId;
                    // let userId = this.props.router.params.userId;
                    if(!userId) {userId = 27280};
                    this.props.getUserProfile(userId);
                    this.props.getStatus(userId);
                }

                componentDidMount() {
                    this.redirectToMainUser();
                }

                componentDidUpdate(prevProps){
                    if(this.props.isMain !== prevProps.isMain) {
                        if(this.props.isMain){
                            this.redirectToMainUser();
                        }
                    }
                }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {userId = 27280};

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}
                                    status={this.props.status} 
                                    updateStatus={this.props.updateStatus}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status:  state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
