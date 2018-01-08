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




store.dispatch(addExpense({description:'Water Bill', amount: 4500}))
store.dispatch(addExpense({description:'Gas Bill', amount: 0, createdAt: 1000}))
store.dispatch(addExpense({description:'Rent', amount: 109500}))

store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)


const jsx = (
    <Provider store={store}>
        <Website />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById("app"))