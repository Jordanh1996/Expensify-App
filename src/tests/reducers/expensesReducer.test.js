import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';

test("should set default state", () => {
    const action = { type: "@@INIT"}
    const result = expensesReducer(undefined, action)
    expect(result).toEqual([])
})

test('should remove expense by id', () => {
    const action = {type: "REMOVE_EXPENSE", id: expenses[1].id}
    const result = expensesReducer(expenses, action)
    expect(result).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {type: "REMOVE_EXPENSE", id: '-1'}
    const result = expensesReducer(expenses, action)
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add an expense', () => {
    const expense = {
            id: '4',
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const amount = 1000
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const result = expensesReducer(expenses, action)
    expect(result[1].amount).toBe(1000)
})

test('should not edit an expense', () => {
    const amount = 1000
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual(expenses)
})