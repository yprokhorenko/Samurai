import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hey, what do you want?", likesCount: 8 },
        { id: 2, message: "Ok, than", likesCount: 3 },
        { id: 3, message: "Don't text me plz?", likesCount: 6 },
      ],

      newPostText: "Hello its me",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Name1" },
        { id: 2, name: "Name2" },
        { id: 3, name: "Name3" },
        { id: 4, name: "Name4" },
        { id: 5, name: "Name5" },
        { id: 6, name: "Name6" },
      ],

      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your course?" },
        { id: 3, message: "Yo" },
      ],

      newMessageBody: "",
    },

    navFriends: [{ name: "Igor" }, { name: "Joe" }, { name: "Julia" }],
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navFriends = friendsReducer(this._state.navFriends, action);
    this._callSubscriber(this._state);
  },
};

export default store;
