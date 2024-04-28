import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import {
  FaSyncAlt,
  FaBug,
  FaCheckCircle,
  FaSpinner,
  FaExclamationCircle,
} from "react-icons/fa";

function BugTable() {
  // Sample bug data
  const [bugs] = useState([
    {
      id: 1,
      name: "Bug ",
      assignedTo: "Developer 1",
      state: "New",
    },
    { id: 2, name: "Bug 2", assignedTo: "Developer 2", state: "In Progress" },
    { id: 3, name: "Bug 3", assignedTo: "Developer 3", state: "Done" },
    { id: 4, name: "Bug 4", assignedTo: "Developer 4", state: "New" },
    { id: 5, name: "Bug 5", assignedTo: "Developer 5", state: "In Progress" },
    { id: 6, name: "Bug 6", assignedTo: "Developer 6", state: "Done" },
    { id: 7, name: "Bug 7", assignedTo: "Developer 7", state: "New" },
    { id: 8, name: "Bug 8", assignedTo: "Developer 8", state: "In Progress" },
    { id: 9, name: "Bug 9", assignedTo: "Developer 9", state: "Done" },
    { id: 10, name: "Bug 10", assignedTo: "Developer 10", state: "New" },
    // Add more bug data as needed
  ]);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [bugsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All"); // State for filter dropdown
  const [filterDeveloper, setFilterDeveloper] = useState("All"); // State for developer filter

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset pagination to first page when searching
  };

  // Function to clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setFilterStatus("All");
    setFilterDeveloper("All");
    setCurrentPage(1); // Reset pagination to first page
  };

  // Filter bugs based on search query, status, and developer
  const filteredBugs = bugs.filter(
    (bug) =>
      (bug.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bug.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === "All" || bug.state === filterStatus) &&
      (filterDeveloper === "All" || bug.assignedTo === filterDeveloper)
  );

  // Get current bugs
  const indexOfLastBug = currentPage * bugsPerPage;
  const indexOfFirstBug = indexOfLastBug - bugsPerPage;
  const currentBugs = filteredBugs.slice(indexOfFirstBug, indexOfLastBug);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredBugs.length / bugsPerPage);

  // Icon component for bug state
  const BugStateIcon = ({ state }) => {
    switch (state.toLowerCase()) {
      case "new":
        return <FaBug className="text-red-500" />;
      case "in progress":
        return <FaSpinner className="text-blue-500" />;
      case "done":
        return <FaCheckCircle className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="statusFilter" className="mr-2">
            Filter by State:
          </label>
          <CustomDropdown
            options={["All", "New", "In Progress", "Done"]}
            value={filterStatus}
            onChange={setFilterStatus}
          />
        </div>
        <div>
          <label htmlFor="developerFilter" className="mr-2">
            Filter by Developer:
          </label>
          <CustomDropdown
            options={[
              "All",
              "Developer 1",
              "Developer 2",
              "Developer 3",
              "Developer 4",
              "Developer 5",
              "Developer 6",
              "Developer 7",
              "Developer 8",
              "Developer 9",
              "Developer 10",
            ]}
            value={filterDeveloper}
            onChange={setFilterDeveloper}
          />
        </div>
        <div className="relative">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(255,153,0)] border border-gray-300 cursor-pointer"
            onClick={clearFilters}
          >
            <FaSyncAlt className="text-black" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="w-1/4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-[rgb(255,153,0)] text-[rgb(23,25,30)] border-[rgb(23,25,30)]">
            <th className="border border-gray-300 px-4 py-2">Bug ID</th>
            <th className="border border-gray-300 px-4 py-2">Bug Name</th>
            <th className="border border-gray-300 px-4 py-2">Assigned To</th>
            <th className="border border-gray-300 px-4 py-2">Bug State</th>
          </tr>
        </thead>
        <tbody>
          {currentBugs.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">
                <div className="flex items-center justify-center text-gray-500">
                  <FaExclamationCircle className="mr-2" />
                  No data found
                </div>
              </td>
            </tr>
          ) : (
            currentBugs.map((bug) => (
              <tr key={bug.id} className="border border-gray-300">
                <td
                  className="border-b-0 px-4 py-2 cursor-pointer text-blue-600 hover:underline"
                  onClick={() => console.log("Bug ID clicked:", bug.id)}
                >
                  {bug.id}
                </td>
                <td className="border-b-0 px-4 py-2 truncate">{bug.name}</td>
                <td className="border-b-0 px-4 py-2">{bug.assignedTo}</td>
                <td className="border-b-0 px-4 py-2 flex items-center">
                  <BugStateIcon state={bug.state} />
                  <span className="ml-2">{bug.state}</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <ul className="flex justify-center mt-4">
        {[...Array(totalPages).keys()].map((page) => (
          <li key={page} className="mx-1">
            <button
              className={`px-3 py-1 bg-gray-200 border border-gray-400 rounded hover:bg-gray-300 focus:outline-none ${
                currentPage === page + 1 ? "bg-gray-300" : ""
              }`}
              onClick={() => paginate(page + 1)}
            >
              {page + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugTable;
