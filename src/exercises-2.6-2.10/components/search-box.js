import React from "react";

const SearchBox = ({ placeholder, keyword, handleKeywordChange }) => (
  <div>
    <h2>Phonebook</h2>
    <div>
      Search:
      <input
        type="search"
        placeholder={placeholder}
        value={keyword}
        onChange={handleKeywordChange}
      />
    </div>
  </div>
);

export default SearchBox;
