import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import expensesReducers from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
export default (preloadedState) => {

    const composedEnhancers = composeWithDevTools(applyMiddleware(thunk))

    const store = createStore(
        combineReducers({
            expenses: expensesReducers,
            filters: filtersReducer,
        }),
        preloadedState, composedEnhancers
    );
    return store;
};
