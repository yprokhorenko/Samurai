import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../src/redux/store";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return (
          <Dialogs
            updateNewMessageBodyCreator={onNewMessageChange}
            sendMessageCreator={onSendMessageClick}
            dialogsPage={state.dialogsPage}
          />
        );
      }}
      ;
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
