import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('filters default', () => {
    const state = filterReducer(undefined, {type : '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('setTextFilter', () => {
    const action = {type: "SET_TEXT_FILTER", text: "test text"}
    const result = filterReducer(undefined, action)
    expect(result.text).toBe("test text")
})



test('sortByAmount', () => {
    const result = filterReducer(undefined, {type: "SORT_BY_AMOUNT"})
    expect(result.sortBy).toBe('amount')
})

test('sortByDate', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const result = filterReducer(filter, {type: "SORT_BY_DATE"})
    expect(result.sortBy).toBe('date')
})