import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import {combineReducers, legacy_createStore as createStore} from "redux";


let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  friendsReducer,
});

let store = createStore(reducers);

export default store;
