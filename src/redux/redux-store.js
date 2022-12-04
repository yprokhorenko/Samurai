import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navFriends: friendsReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
