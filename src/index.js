import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../src/firebase/firebase';
import { firebase } from '../src/firebase/firebase'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasRendered = false;

const renderApp = () => {
  ReactDOM.render(jsx, document.getElementById('app'));
  hasRendered = true;
}

ReactDOM.render(
  <p> Loading.....</p>,
  document.getElementById('app')
);




firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  } else {

    store.dispatch(logout())
    renderApp();
    history.push('/')
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
