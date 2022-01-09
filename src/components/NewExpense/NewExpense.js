import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formToggle, setFormToggle] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormToggle(false);
  };

  const clickHandler = () => {
    setFormToggle(true);
  };

  const closeForm = () => {
    setFormToggle(false);
  };

  return (
    <div className="new-expense">
      {formToggle ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={closeForm} />
      ) : (
        <button onClick={clickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
