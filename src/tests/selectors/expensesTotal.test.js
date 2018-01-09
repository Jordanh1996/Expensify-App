import Total from '../../selectors/expensesTotal';
import expenses from '../fixture/expenses';

test('should return a total of expenses with just 1 item', () => {
    const totaloneitem = Total([expenses[0]])
    expect(totaloneitem).toBe(1.95)
})

test('should return a total of expenses with more than 1 item', () => {
    const totalsum = Total(expenses)
    expect(totalsum).toBe(1141.95)
})