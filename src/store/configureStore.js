import {createStore, combineReducers} from 'redux';
import ExpenseReducer from '../reducers/expenses';
import FilterReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: ExpenseReducer,
            filters: FilterReducer
        }
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

    
    return store;
}

