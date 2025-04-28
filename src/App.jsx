import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 5000, category: "Food" },
    { id: 2, description: "Transport", amount: 1500, category: "Transport" },
    { id: 3, description: "Rent", amount: 25000, category: "Housing" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm && filteredExpenses.length === 0) {
      setErrorMessage("Expense unavailable");
    } else {
      setErrorMessage("");
    }
  }, [searchTerm, filteredExpenses]);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />

     
      <div className="search-container">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
