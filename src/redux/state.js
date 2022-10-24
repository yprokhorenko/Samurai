const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


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
    // { type:'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 4, message: body });
      this._callSubscriber(this._state);
    }
  }, 
};

  export const addPostActionCreator = () => {
    return {type: ADD_POST};
  };

  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    };
  };

  export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE };
  };

  export const updateNewMessageBodyCreator = (bodyText) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: bodyText,
    };
  };
  

  export default store;
