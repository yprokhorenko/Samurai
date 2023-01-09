import React from "react";
import { connect } from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { useParams} from 'react-router-dom';



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
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
