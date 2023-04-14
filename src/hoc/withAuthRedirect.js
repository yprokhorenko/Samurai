import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => { //https://youtu.be/7W4PD4BN3eY?t=875
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login"} />;

      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );  //https://youtu.be/7W4PD4BN3eY?t=1409
  return ConnectedAuthRedirectComponent;
};

//https://youtu.be/_X3dVadZp2U?t=790 нюанс з перенаправленням і HOC
//https://youtu.be/7W4PD4BN3eY?t=1027 які HOC до того юзали
// https://youtu.be/7W4PD4BN3eY?t=1125 naming