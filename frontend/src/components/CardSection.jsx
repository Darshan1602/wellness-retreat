import React, { useState } from "react";
import Item from "./Item";
import all_data from "../assets/data";

const CardSection = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    type: "",
    date: "",
    search: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredData = all_data.filter((item) => {
    const matchesType = filters.type ? item.type.toLowerCase().includes(filters.type.toLowerCase()) : true;
    const matchesDate = filters.date ? new Date(item.date * 1000).toISOString().split("T")[0] === filters.date : true;
    const matchesSearch = filters.search ? item.title.toLowerCase().includes(filters.search.toLowerCase()) : true;
    return matchesType && matchesDate && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <section className="card-section bg-header-color pt-0" >
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            name="type"
            placeholder="Filter by type"
            value={filters.type}
            onChange={handleFilterChange}
            className="mb-2 md:mb-0 md:mr-2 px-4 py-2 rounded-lg"
          />
          <select
            name="dateRange"
            value={filters.dateRange}
            onChange={handleFilterChange}
            className="mb-2 md:mb-0 md:mr-2 px-4 py-2 rounded-lg"
          >
            <option value="">Select Date Range</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>
          </select>
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search by title"
          value={filters.search}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            date={new Date(item.date * 1000).toISOString()}
            location={item.location}
            price={item.price}
          />
        ))}
      </div>
      <div className="pagination flex justify-center space-x-4 mt-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={`px-4 py-2 text-white font-semibold rounded-lg ${currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
        >
          Prev
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          className={`px-4 py-2 text-white font-semibold rounded-lg ${currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  </section>
  );
};

export default CardSection;
