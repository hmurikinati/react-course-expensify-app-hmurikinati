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
//import NyComponent from '../src/components/mycomponent'

const store = configureStore();

store.subscribe(() => {
    //console.log(store.getState());
    const state = store.getState();
    const results = getVisibleExpenses(state.expenses, state.filters);
    console.log('results  : ', results);

});

store.dispatch(addExpense({ description: 'Water bill', amount: 100 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 20 , createdAt: 200}));
store.dispatch(addExpense({ description: 'Rent bill', amount: 30, createdAt: 300 }));


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
