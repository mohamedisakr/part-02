import React from "react";

const SearchBox = ({
  title,
  label,
  placeholder,
  keyword,
  handleKeywordChange,
}) => (
  <div>
    <h2>{title}</h2>
    <div>
      {label}:
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
