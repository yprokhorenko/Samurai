import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { HashRouter,BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}> //https://youtu.be/MM02LsZqssQ?t=1766
        <App />
      </Provider>
    </BrowserRouter> //https://youtu.be/JtbSOJKRJAI?t=1717
  </React.StrictMode>
);

//https://youtu.be/rsW9_UtF4jk?t=1109 jsx into js //https://youtu.be/rsW9_UtF4jk?t=1389
//https://youtu.be/YEqCI9NMoLI?t=1414 PureComponent and React.memo() https://youtu.be/YEqCI9NMoLI?t=1781
//https://youtu.be/KU81NnNcjmw?t=493 pure function , mutable methods
