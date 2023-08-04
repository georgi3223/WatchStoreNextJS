"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FilterProducts = ({ data, onFilter }) => {
  const [filters, setFilters] = useState({
    brand: "",
    collection: "",
    priceRange: "", // Price range filter
    color: "",
    dialShape: "",
    targetGroup: "", // Target group filter
    material: "", // Material filter
    strapMaterial: "", // Strap material filter
    diameter: "", // Diameter filter
    movement: "", // Movement filter
    specialFeatures: "", // Special features filter
  });

  const handleFilterChange = (event) => {
    const { id, value, checked } = event.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked ? value : "",
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      brand: "",
      collection: "",
      priceRange: "", // Price range filter
      color: "",
      dialShape: "",
      targetGroup: "", // Target group filter
      material: "", // Material filter
      strapMaterial: "", // Strap material filter
      diameter: "", // Diameter filter
      movement: "", // Movement filter
      specialFeatures: "", // Special features filter
    });
    onFilter(data); // Send the original data to show all products again
  };

  const applyFilters = () => {
    // Filter the data based on the selected filter options
    let filteredData = [...data];

    if (filters.brand !== "") {
      filteredData = filteredData.filter(
        (item) => item.brand === filters.brand
      );
    }

    if (filters.collection !== "") {
      filteredData = filteredData.filter(
        (item) => item.collection === filters.collection
      );
    }

    if (filters.priceRange !== "") {
      filteredData = filteredData.filter(
        (item) => item.priceRange === filters.priceRange
      );
    }

    if (filters.color !== "") {
      filteredData = filteredData.filter(
        (item) => item.color === filters.color
      );
    }

    if (filters.dialShape !== "") {
      filteredData = filteredData.filter(
        (item) => item.dialShape === filters.dialShape
      );
    }

    onFilter(filteredData);
  };

  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const handleApplyFilters = () => {
    applyFilters();
    setShowFilterMenu(false); // Hide the filter menu after applying filters
  };

  const handleClearAndHideFilters = () => {
    handleClearFilters();
    setShowFilterMenu(false); // Hide the filter menu after clearing filters
  };

  return (
    <section className="filter-products flex mb-4 ">
      {/* Filter button for small screens */}
      <button
        className="md:hidden bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={toggleFilterMenu}
      >
        Filter
      </button>

      {/* Filter menu overlay */}
      {showFilterMenu && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
          {/* Filter menu */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Filter</h2>
              <button className="text-gray-600" onClick={toggleFilterMenu}>
                <AiOutlineClose className="h-5 w-5" />
              </button>
            </div>

            {/* Filter options */}
            {/* Brand Section */}
            <div className="filter-scroll-container overflow-y-auto max-h-60">
              {" "}
              <section className="filterMenu">
                <div className="filter-section">
                  <h3 className="text-lg font-bold mb-2">Brands</h3>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="brand"
                        value="Brand1"
                        checked={filters.brand === "Brand1"}
                        onChange={handleFilterChange}
                      />
                      Brand1
                    </label>
                  </div>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="brand"
                        value="Brand2"
                        checked={filters.brand === "Brand2"}
                        onChange={handleFilterChange}
                      />
                      Brand2
                    </label>
                  </div>
                  {/* Add more brand checkboxes here */}
                </div>

                {/* Color Section */}
                <div className="filter-section">
                  <h3 className="text-lg font-bold mb-2">Colors</h3>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="color"
                        value="Black"
                        checked={filters.color === "Black"}
                        onChange={handleFilterChange}
                      />
                      Black
                    </label>
                  </div>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="color"
                        value="Silver"
                        checked={filters.color === "Silver"}
                        onChange={handleFilterChange}
                      />
                      Silver
                    </label>
                  </div>
                  {/* Add more color checkboxes here */}
                </div>

                {/* Diameter Section */}
                <div className="filter-section">
                  <h3 className="text-lg font-bold mb-2">Diameter</h3>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="diameter"
                        value="38mm"
                        checked={filters.diameter === "38mm"}
                        onChange={handleFilterChange}
                      />
                      38mm
                    </label>
                  </div>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="diameter"
                        value="40mm"
                        checked={filters.diameter === "40mm"}
                        onChange={handleFilterChange}
                      />
                      40mm
                    </label>
                  </div>

                  {/* Add more diameter checkboxes here */}
                </div>
                {/* Special Features Section */}
                <div className="filter-section">
                  <h3 className="text-lg font-bold mb-2">Special Features</h3>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="specialFeatures"
                        value="Water Resistant"
                        checked={filters.specialFeatures === "Water Resistant"}
                        onChange={handleFilterChange}
                      />
                      Water Resistant
                    </label>
                  </div>
                  <div className="filter-checkbox mb-2">
                    <label>
                      <input
                        type="checkbox"
                        id="specialFeatures"
                        value="Date Function"
                        checked={filters.specialFeatures === "Date Function"}
                        onChange={handleFilterChange}
                      />
                      Date Function
                    </label>
                  </div>
                  {/* Add more special features checkboxes here */}
                </div>
              </section>
            </div>

            {/* Apply and Clear Buttons */}
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                onClick={handleClearAndHideFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop filter section on the left side for filtering products by various criteria. */}
     
        <section
        className="filtering hidden  md:inline rounded-md border border-solid p-10 "
        // Use the hidden class for screens under 768px
      >
        {/* Heading for the filter section. */}
        <h2 className="text-2xl font-bold mb-4">Filters</h2>

        <section className="filterMenu">
          {/* Brand Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Brand</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="brand"
                  value="Brand1"
                  checked={filters.brand === "Brand1"}
                  onChange={handleFilterChange}
                />
                Brand1
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="brand"
                  value="Brand2"
                  checked={filters.brand === "Brand2"}
                  onChange={handleFilterChange}
                />
                Brand2
              </label>
            </div>
            {/* Add more brand checkboxes here */}
          </div>

          {/* Collection Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Collection</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="collection"
                  value="Classic"
                  checked={filters.collection === "Classic"}
                  onChange={handleFilterChange}
                />
                Classic
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="collection"
                  value="Elegant"
                  checked={filters.collection === "Elegant"}
                  onChange={handleFilterChange}
                />
                Elegant
              </label>
            </div>
            {/* Add more collection checkboxes here */}
          </div>

          {/* Price Range Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Price Range</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="radio"
                  id="priceRange"
                  value="low"
                  checked={filters.priceRange === "low"}
                  onChange={handleFilterChange}
                />
                Low
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="radio"
                  id="priceRange"
                  value="medium"
                  checked={filters.priceRange === "medium"}
                  onChange={handleFilterChange}
                />
                Medium
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="radio"
                  id="priceRange"
                  value="high"
                  checked={filters.priceRange === "high"}
                  onChange={handleFilterChange}
                />
                High
              </label>
            </div>
            {/* Add more price range radio buttons here */}
          </div>

          {/* Color Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Color</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="color"
                  value="Black"
                  checked={filters.color === "Black"}
                  onChange={handleFilterChange}
                />
                Black
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="color"
                  value="Silver"
                  checked={filters.color === "Silver"}
                  onChange={handleFilterChange}
                />
                Silver
              </label>
            </div>
            {/* Add more color checkboxes here */}
          </div>

          {/* Dial Shape Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Dial Shape</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="dialShape"
                  value="Round"
                  checked={filters.dialShape === "Round"}
                  onChange={handleFilterChange}
                />
                Round
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="dialShape"
                  value="Square"
                  checked={filters.dialShape === "Square"}
                  onChange={handleFilterChange}
                />
                Square
              </label>
            </div>
            {/* Add more dial shape checkboxes here */}
          </div>

          {/* Target Group Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Target Group</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="targetGroup"
                  value="Men"
                  checked={filters.targetGroup === "Men"}
                  onChange={handleFilterChange}
                />
                Men
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="targetGroup"
                  value="Women"
                  checked={filters.targetGroup === "Women"}
                  onChange={handleFilterChange}
                />
                Women
              </label>
            </div>
            {/* Add more target group checkboxes here */}
          </div>

          {/* Material Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Material</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="material"
                  value="Stainless Steel"
                  checked={filters.material === "Stainless Steel"}
                  onChange={handleFilterChange}
                />
                Stainless Steel
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="material"
                  value="Silver Plated"
                  checked={filters.material === "Silver Plated"}
                  onChange={handleFilterChange}
                />
                Silver Plated
              </label>
            </div>
            {/* Add more material checkboxes here */}
          </div>

          {/* Strap Material Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Strap Material</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="strapMaterial"
                  value="Leather"
                  checked={filters.strapMaterial === "Leather"}
                  onChange={handleFilterChange}
                />
                Leather
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="strapMaterial"
                  value="Metal"
                  checked={filters.strapMaterial === "Metal"}
                  onChange={handleFilterChange}
                />
                Metal
              </label>
            </div>
            {/* Add more strap material checkboxes here */}
          </div>

          {/* Diameter Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Diameter</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="diameter"
                  value="38mm"
                  checked={filters.diameter === "38mm"}
                  onChange={handleFilterChange}
                />
                38mm
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="diameter"
                  value="40mm"
                  checked={filters.diameter === "40mm"}
                  onChange={handleFilterChange}
                />
                40mm
              </label>
            </div>
            {/* Add more diameter checkboxes here */}
          </div>

          {/* Movement Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Movement</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="movement"
                  value="Quartz"
                  checked={filters.movement === "Quartz"}
                  onChange={handleFilterChange}
                />
                Quartz
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="movement"
                  value="Automatic"
                  checked={filters.movement === "Automatic"}
                  onChange={handleFilterChange}
                />
                Automatic
              </label>
            </div>
            {/* Add more movement checkboxes here */}
          </div>

          {/* Special Features Section */}
          <div className="filter-section">
            <h3 className="text-lg font-bold mb-2">Special Features</h3>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="specialFeatures"
                  value="Water Resistant"
                  checked={filters.specialFeatures === "Water Resistant"}
                  onChange={handleFilterChange}
                />
                Water Resistant
              </label>
            </div>
            <div className="filter-checkbox mb-2">
              <label>
                <input
                  type="checkbox"
                  id="specialFeatures"
                  value="Date Function"
                  checked={filters.specialFeatures === "Date Function"}
                  onChange={handleFilterChange}
                />
                Date Function
              </label>
            </div>
            {/* Add more special features checkboxes here */}
          </div>
        </section>
        {/* Apply Button */}
        <div className="filter-dropdown mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
        {/* Clear Button */}
        <div className="filter-dropdown mb-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
      </section>

    </section>
  );
};

export default FilterProducts;
