import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import  PrivateRoute  from './PrivateRouter';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashBoardPage} exact={true} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <PublicRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;