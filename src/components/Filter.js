import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleSearchChange(event){
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search"
      placeholder="Search..." 
      onChange={handleSearchChange} 
      value={search}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
{/* ✕ uses a prop of 'search' to display the search term in the input field (124 ms)
    ✕ calls the onSearchChange callback prop when the input is changed (9 ms)
    ✕ the input field acts as a controlled input (42 ms)
    ✕ the shopping list displays all items when initially rendered (24 ms)
    ✕ the shopping filters based on the search term to include full matches (31 ms)
    ✕ the shopping filters based on the search term to include partial matches (137 ms)
*/}
