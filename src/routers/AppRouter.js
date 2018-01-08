import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/header';
import Editpage from '../components/edit';
import Helppage from '../components/help';
import Addexpense from '../components/addExpensePage';
import Notfound from '../components/notfound';
import Dashboard from '../components/expenseDashboard'



const Website = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/edit" component={Editpage} exact={true} />
                <Route path="/edit/:id" component={Editpage} />
                <Route path="/help" component={Helppage} />
                <Route path="/expense" component={Addexpense} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Website;