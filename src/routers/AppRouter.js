import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Editpage from '../components/edit';
import Addexpense from '../components/addExpensePage';
import Notfound from '../components/notfound';
import Dashboard from '../components/expenseDashboard';
import LoginPage from '../components/loginPage';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';


export const history = createHistory();


const Website = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/edit/:id" component={Editpage} />
                <PrivateRoute path="/create" component={Addexpense} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default Website;