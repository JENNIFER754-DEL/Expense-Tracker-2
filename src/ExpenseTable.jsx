import React from "react";
import "./index.css";

function ExpenseTable({ expenses, onDelete }) {
  return (
    <div className="expense-table">
      <h2>Expense Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount (Ksh)</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
