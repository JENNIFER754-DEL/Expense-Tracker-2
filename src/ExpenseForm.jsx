import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description && amount && category) {
      const newExpense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        category,
      };

      onAddExpense(newExpense);
      setDescription("");
      setAmount("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">-- Select Category --</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
        <option value="Transportation">Transportation</option>
        <option value="Health">Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Insurance">Insurance</option>
        <option value="Debt">Debt</option>
        <option value="Education">Education</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
