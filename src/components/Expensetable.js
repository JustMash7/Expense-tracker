function ExpenseTable({ expenses }) {
    if (!Array.isArray(expenses)) {
      throw new Error('expenses must be an array');
    }
  
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseRow key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    );
  }
  
  function ExpenseRow({ expense }) {
    return (
      <tr>
        <td>{expense.description}</td>
        <td>${expense.amount.toFixed(2)}</td>
        <td>{expense.category}</td>
      </tr>
    );
  }
  
  export default ExpenseTable;