import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink, Route, Switch, Link} from 'react-router-dom';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Website from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
console.log('tesing')

const jsx = (
    <Provider store={store}>
        <Website />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById("app"))