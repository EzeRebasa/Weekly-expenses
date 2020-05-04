import React from 'react';
import Expense from './Expense';

const ExpensesList = ({expenses}) =>  (
    <div className="made-expenses">
        <h2> List </h2>
        {expenses.map(expense => (
            <Expense 
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
);
 
export default ExpensesList;