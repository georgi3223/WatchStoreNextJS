"use client";
import { useState, useEffect } from "react";
import SearchSort from "./SearchSort";
import FilterProducts from "./FilterProducts";
import StarRating from "./StarRating";

const WatchList = () => {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [rating, setRating] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Define isMobile state
  const [showFilters, setShowFilters] = useState(false); // Define showFilters state

  const [showMoreCount, setShowMoreCount] = useState(10);

  useEffect(() => {
    // Fetch the data from the watches.json file.
    fetch("/watches.json")
      .then((response) => response.json())
      .then((data) => {
        setWatches(data);
      })
      .catch((error) => console.error("Error fetching watches:", error));
  }, []);

  useEffect(() => {
    // Update the filteredWatches state when watches or showMoreCount changes
    setFilteredWatches(watches.slice(0, showMoreCount));
  }, [watches, showMoreCount]);

  const handleFilter = (filteredData) => {
    setFilteredWatches(filteredData);
  };

  const handleSearch = (searchTerm) => {
    const filtered = watches.filter((watch) =>
      watch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWatches(filtered.slice(0, showMoreCount));
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleLoadMore = () => {
    setShowMoreCount((prevCount) => prevCount + 10);
  };

  const handleSort = (sortOption) => {
    let sorted = [...watches];

    switch (sortOption) {
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        // If the sort option is 'default' or any other invalid option, keep the current order.
        break;
    }

    setWatches(sorted);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mt-20">
          <FilterProducts data={watches} onFilter={handleFilter} />
        </div>
        {/* Products Section */}
        <div className="md:col-span-3">
          {/* Search and Sort Section */}
          <SearchSort onSearch={handleSearch} onSort={handleSort} />
          {/* Filters (conditionally rendered based on screen size) */}

          {/* Display the number of products shown */}
          <div className="text-center m-4">
            <h2 className="text-xl font-semibold mb-2">Watches</h2>
            <p>{filteredWatches.length} Products</p>
          </div>
          {/* Watches Grid */}
          <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
            {filteredWatches.map((watch) => (
              <div
                key={watch.id}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
              >
                <img
                  src={watch.imageSrc}
                  alt={watch.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                <p className="text-gray-600">${watch.price.toFixed(2)}</p>
                <p className="text-gray-500">{watch.category}</p>
                <StarRating
                  rating={rating}
                  onRatingChange={handleRatingChange}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg"
                  onClick={() => alert(`Added "${watch.name}" to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {showMoreCount < watches.length && (
            <div className="text-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
