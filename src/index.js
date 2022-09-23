import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  let dialogs = [
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
    { id: 4, name: "Name4" },
    { id: 5, name: "Name5" },
    { id: 6, name: "Name6" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your course?" },
    { id: 3, message: "Yo" },
  ];

  let posts = [
    { id: 1, message: "Hey, what do you want?", likesCount: 8 },
    { id: 2, message: "Ok, than", likesCount: 3 },
    { id: 3, message: "Don't text me plz?", likesCount: 6 },
  ];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
