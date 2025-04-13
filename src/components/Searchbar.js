function SearchBar({ searchTerm, onSearchChange }) {
    return (
      <input
        type="text"
        placeholder="Search by description or category..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    );
  }
  
  export default SearchBar;