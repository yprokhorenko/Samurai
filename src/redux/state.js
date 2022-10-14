const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

  dispatch(action) {        // { type:'ADD-POST'}
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
    }
  },
}

  export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    };
  };

  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    };
  };

  export default store;
