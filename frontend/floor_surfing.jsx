import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    let preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
