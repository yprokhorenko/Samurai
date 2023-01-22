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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
