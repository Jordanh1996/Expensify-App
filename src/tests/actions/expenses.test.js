import {addExpense, removeExpense, editExpense} from '../../actions/expenses';



test('this test checks addExpnse', () => {
    const actionObject = {
        description: "some description",
        note: "a note",
        amount: 1000,
        createdAt: 1000
    }
    const action = addExpense(actionObject)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...actionObject,
            id: expect.any(String)
        }
    })
})

test('checks addExpnse default values work', () => {
    const action = addExpense();
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    });
  });

test('checks removeExpense', () => {
    const action = removeExpense({id: "abc123"})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})

test('checks editExpense', () => {
    const action = editExpense('abc123', {note: 'asd'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'asd'
        }
    })
})