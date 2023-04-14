import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import { initializeApp } from "../src/redux/app-reducer";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {  //https://youtu.be/GFN1D81sBEw?t=1775
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile" element={<ProfileContainer isMain={true} />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} /> //https://youtu.be/e6SpHkb0E3I?t=1159
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized, //https://youtu.be/GFN1D81sBEw?t=1515
});

export default connect(mapStateToProps, { initializeApp })(App);
//https://youtu.be/e6SpHkb0E3I?t=1463 показ свій профіль по /profile
//https://youtu.be/78ak5Jqmh9g?t=1400 методи і ф в функц і класс комп
//https://youtu.be/_jyrQh0ZdTA?t=367 dispatch 
//https://youtu.be/_jyrQh0ZdTA?t=726 z 4 min mapStateToProps