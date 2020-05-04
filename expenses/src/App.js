import React, { useState, useEffect } from "react";
import Question from "./component/question";
import Form from "./component/Form";
import ExpensesList from "./component/ExpensesList";
import BudgetControl from "./component/BudgetControl";

function App() {
  // To define the state
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [viewquestion, updateQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createexpense, setCreateExpense] = useState(false);

  // UseEffect that updates the balance
  useEffect(() => {
    if (createexpense) {

      // Add new budget
      setExpenses([...expenses, expense]);

      // Substract from actual budget
      const remainingBudget = balance - expense.quantity;
      setBalance(remainingBudget);
      //Reset to false
      setCreateExpense(false);
    }
  }, [expense]);

  return (
    <div className="container">
      <header>
        <h1> Weekly expenses </h1>

        <div className="main-content content">
          {viewquestion ? (
            <Question
              setBudget={setBudget}
              setBalance={setBalance}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>

              <div className="one-half column">
                <ExpensesList expenses={expenses} />

                <BudgetControl budget={budget} balance={balance} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
