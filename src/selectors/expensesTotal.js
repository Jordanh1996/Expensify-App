


export default (expenses) => {
    if (expenses.length > 0) {
    let total = 0;
    expenses.forEach((expense) => {total = total + expense.amount})
    total = total / 100
    return total }
}