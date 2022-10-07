
let rerenderEntireTree = () => {}
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hey, what do you want?", likesCount: 8 },
      { id: 2, message: "Ok, than", likesCount: 3 },
      { id: 3, message: "Don't text me plz?", likesCount: 6 },
    ],

    newPostText: "Hello its me"

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
};


export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state;
