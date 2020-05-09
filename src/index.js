import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
 import AppRouter from './routers/AppRouter'
 import configureStore from './store/configureStore';
 import { addExpense } from './actions/expenses'; 
//import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../src/firebase/firebase'
//import NyComponent from '../src/components/mycomponent'

const store = configureStore();

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(
  
    jsx,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
