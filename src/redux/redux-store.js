import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";


let reducers = combineReducers({ //https://youtu.be/eWdnjfRu9Io?t=663
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navFriends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer //https://youtu.be/b3pU3hsJlNk?t=1165
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const store = createStore(reducers, composeEnhancers (applyMiddleware(thunkMiddleware))); //https://youtu.be/dtKX3JyeVts?t=583

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;

export default store;

//local state:
//https://youtu.be/78ak5Jqmh9g?t=843  
// https://youtu.be/78ak5Jqmh9g?t=1222 Чому не юзається як основа.