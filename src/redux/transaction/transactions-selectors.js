export const getExpence = state => state.transactions.expenses.expenses;
export const getIncome = state => state.transactions.income.income;
export const getIncomeMonth = state => state.transactions.income.monthsStats;
export const getExpenseMonth = state => state.transactions.expense.monthsStats;
export const getNewBalance = state => state.newBalance;
export const getLoading = state => state.loading;
