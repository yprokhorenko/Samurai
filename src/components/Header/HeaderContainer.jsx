import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component { //https://youtu.be/b3pU3hsJlNk?t=1373
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login, //https://youtu.be/b3pU3hsJlNk?t=2118
});

export default connect(mapStateToProps, { logout })(HeaderContainer); //https://youtu.be/oWeSh6-Mrvg?t=1682
