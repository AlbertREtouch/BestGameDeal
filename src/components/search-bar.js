// SearchBar.js
import React, { useState } from 'react';
import './search-bar.css'; // 确保CSS文件被导入

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input
        type="text"
        className="searchInput"
        placeholder="Search Game Title and Get the Lowest Price"
        autoFocus
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button 
        type="submit" 
        className="searchButton"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
