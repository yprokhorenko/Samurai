import React from "react";
import { connect } from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Navigate, useParams} from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
                    if(!userId) {userId = 2};
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
    if (!userId) {userId = 2};
    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"}/>
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
) (ProfileContainer);
