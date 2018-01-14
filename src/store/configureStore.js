import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ExpenseReducer from '../reducers/expenses';
import FilterReducer from '../reducers/filters';
import AuthReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            expenses: ExpenseReducer,
            filters: FilterReducer,
            auth: AuthReducer
        }
    ),
    composeEnchancers(applyMiddleware(thunk))
)

    
    return store;
}

