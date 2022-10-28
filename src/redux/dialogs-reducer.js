const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


let initialState = {
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
  }

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 4, message: body });
      return state;

    default:
     return state;
  }
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

export default dialogsReducer;
