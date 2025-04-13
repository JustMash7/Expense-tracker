import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import SearchBar from './SearchBar';

const initialExpenses = [
  { id: 1, description: 'Groceries', amount: 50, category: 'Food' },
  { id: 2, description: 'Flight Ticket', amount: 300, category: 'Travel' },
  { id: 3, description: 'Netflix Subscription', amount: 15, category: 'Entertainment' },
  { id: 4, description: 'Electric Bill', amount: 80, category: 'Utilities' },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      expense.description.toLowerCase().includes(lowerSearch) ||
      expense.category.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
