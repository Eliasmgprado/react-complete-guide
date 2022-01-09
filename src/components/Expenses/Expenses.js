import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filteredExpenses = props.items.filter((item) => {
    const year = item.date.getFullYear();
    return year === parseInt(filterYear);
  });
  // console.log(expenseItems);

  const setFilterHandler = (enteredYear) => {
    setFilterYear(enteredYear);
    console.log(enteredYear);
  };

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onSetFilter={setFilterHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
