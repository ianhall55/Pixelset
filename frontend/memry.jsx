import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { login, logout, signup, receiveCurrentUser, receiveErrors} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});

window.login = login;
window.logout = logout;
window.signup = signup;
window.user1 = ({username: 'ian', password: 'password'});
window.receiveCurrentUser = receiveCurrentUser;
window.receiveErrors = receiveErrors;
window.user = {user: {username: 'ian', password: 'password'}};
window.newUser = {user: {first_name: 'kasey', last_name: 'kozitza',
  username: 'kkozit', password: 'password', email: 'kk@gmail.com'}};
