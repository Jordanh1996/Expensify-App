import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ExpenseReducer from '../reducers/expenses';
import FilterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            expenses: ExpenseReducer,
            filters: FilterReducer
        }
    ),
    composeEnchancers(applyMiddleware(thunk))
)

    
    return store;
}

