function App() {
    const [expenses, setExpenses] = useState<Array<any>>(initialExpenses);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleAddExpense = (newExpense) => {
      try {
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      } catch (error) {
        console.error(error);
      }
    };
  
    const filteredExpenses = useMemo(() => {
      return expenses.filter((expense) => {
        const lowerSearch = searchTerm.toLowerCase();
        return (
          expense.description.toLowerCase().includes(lowerSearch) ||
          expense.category.toLowerCase().includes(lowerSearch)
        );
      });
    }, [expenses, searchTerm]);
  
    return (
      <div className="App">
        <h1>Expense Tracker</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    );
  }