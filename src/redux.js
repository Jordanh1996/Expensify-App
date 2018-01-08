import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
console.log("this is redux")

// expense reducer

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0}) => ({
    type:'ADD_EXPENSE',
    expense: {
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

const editExpense = (id, updates) => ({
    type:"EDIT_EXPENSE",
    id,
    updates
})

const ExpenseDefault = []

const ExpenseReducer = (state = ExpenseDefault, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
        return [
            ...state,
            action.expense
        ]

        case 'REMOVE_EXPENSE' :
        return state.filter(({id}) => id !== action.id)
        
        case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                }
            } else return expense
        })

        default:
            return state
    }
}

//filter reducer

const FilterDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
})

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})

const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date
})

const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
})

const FilterReducer = (state = FilterDefault, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }

        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date
            }

        case "SET_END_DATE": 
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses: ExpenseReducer,
        filters: FilterReducer
    }
))

const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}


console.log(store.getState())

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 200, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 400, createdAt: -1000}))

//store.dispatch(editExpense(expenseOne.expense.id, {amount: 500}))
//store.dispatch(removeExpense({ id: expenseTwo.expense.id}))

//store.dispatch(setTextFilter('rent'))
//store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
//store.dispatch(sortByDate())

//store.dispatch(setStartDate(-1125))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(999))
