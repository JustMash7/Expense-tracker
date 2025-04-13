function SearchBar({ searchTerm, onSearchChange }) {
    if (typeof searchTerm !== 'string') {
      throw new Error('searchTerm must be a string');
    }
  
    const handleChange = (e) => {
      try {
        onSearchChange(e.target.value);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <input
        type="text"
        placeholder="Search by description or category..."
        value={searchTerm}
        onChange={handleChange}
      />
    );
  }
  
  export default SearchBar;