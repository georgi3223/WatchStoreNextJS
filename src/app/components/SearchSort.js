"use client";

import React, { useState } from "react";

const SearchSort = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onSort(event.target.value);
  };

  return (
    <section className="flex justify-between items-center mb-4">
      {/* Input field for searching products by name. */}
      <input
        type="text"
        id="search"
        placeholder="Search by name..."
        className="px-4 py-2 border border-gray-300 rounded-md w-64 md:w-auto"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Section for sorting products. */}
      <section className="sorting ml-4">
        {/* Label for the sorting dropdown. */}

        {/* Select dropdown for sorting options. */}
        <select
          id="sort"
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="default">Sort by</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>
      </section>
    </section>
  );
};

export default SearchSort;
