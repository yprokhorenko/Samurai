const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const profileReducer = (state, action) => {
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

export default profileReducer;
