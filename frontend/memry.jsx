import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { login, logout, signup, receiveCurrentUser, receiveErrors} from './actions/session_actions';
import { fetchAlbumsForUser, addAlbum, destroyAlbum, updateAlbum } from './actions/albums_actions';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
      // Log the error as normally
      orgError.apply(console, [message]);
    }
  };

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById("root");
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
});

// window.login = login;
// window.logout = logout;
// window.signup = signup;
// window.user1 = ({username: 'ian', password: 'password'});
// window.receiveCurrentUser = receiveCurrentUser;
window.receiveErrors = receiveErrors;
window.user = {user: {username: 'ian', password: 'password'}};
window.fetchAlbumsForUser = fetchAlbumsForUser;
window.addAlbum = addAlbum;
window.destroyAlbum = destroyAlbum;
window.updateAlbum = updateAlbum;
window.album = {album: {title: "SF", event_date: new Date("01/05/2015"), owner_id: 1}};
