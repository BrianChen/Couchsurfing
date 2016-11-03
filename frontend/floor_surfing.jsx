import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
