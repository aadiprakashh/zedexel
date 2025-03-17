import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useProject } from "../components/ProjectContext"; // ✅ Import context

const VenueLists = ({ projects }) => {  
  const navigate = useNavigate();
  const { setSelectedProject } = useProject(); // ✅ Get the setter function

  const statusClasses = {
    "Design Submitted": "border-green-400 bg-green-50 text-green-700",
    "In progress": "border-yellow-400 bg-yellow-50 text-yellow-700",
    "Project Confirmed": "border-yellow-400 bg-yellow-50 text-yellow-700",
    "Cancelled": "border-red-400 bg-red-50 text-red-700",
    "Pending": "border-red-400 bg-red-50 text-red-700",
    "Admin Approved": "border-blue-400 bg-blue-50 text-blue-700",
  };

  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset pagination on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
// sorting the projects 
  const sortedProjects = [...projects].sort((a, b) => new Date(b.start_date) - new Date(a.start_date));

  // Apply search filtering
  const filteredProjects = sortedProjects.filter((project) => {
    const query = searchQuery.toLowerCase();
  
    return (
      project.name.toLowerCase().includes(query) ||
      project.status.toLowerCase().includes(query) ||
      project.venue.toLowerCase().includes(query) ||
      project.start_date.toLowerCase().includes(query) || 
      project.end_date.toLowerCase().includes(query)
    );
  });
  

  // Calculate total pages after filtering
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Header with Projects Title and Search Bar */}
      <div className="flex items-center justify-between mb-4 mt-2">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="relative ms-auto">
          <input
            type="text"
            placeholder="Search by location, user..."
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="w-[300px] p-3 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <IoIosSearch
            size={25}
            color="#333"
            className="absolute left-3 top-3 text-gray-400 text-lg"
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          {/* Table Header */}
          <thead className="bg-[#F7F7F9] text-gray-600">
            <tr>
              <th className="p-3 text-gray-400 font-medium rounded-tl-lg">Name</th>
              <th className="p-3 text-gray-400 font-medium">Start Date</th>
              <th className="p-3 text-gray-400 font-medium">End Date</th>
              <th className="p-3 text-gray-400 font-medium">Status</th>
              <th className="p-3 text-gray-400 font-medium rounded-tr-lg">Venue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-transparent">
            {currentData.map((exb, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  if (exb) {
                    setSelectedProject(exb);
                    navigate("/details");
                  }
                }}
              >
                <td className="p-3">{exb.name}</td>
                <td className="p-3">{exb.start_date}</td>
                <td className="p-3">{exb.end_date}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 border rounded text-sm ${
                      statusClasses[exb.status] || "bg-gray-100 text-gray-700"
                    }`}
                    style={{ borderRadius: "20px" }}
                  >
                    {exb.status}
                  </span>
                </td>
                <td className="p-3">{exb.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <p>
          Showing{" "}
          <span className="bg-gray-200 px-2 py-1 rounded-lg">
            <strong>{currentData.length}</strong>
          </span>{" "}
          of <strong>{filteredProjects.length}</strong> entries
        </p>
        <div className="space-x-2 flex">
          {/* First Page */}
          {currentPage > 2 && (
            <>
              <button className="px-3 py-1 border border-gray-300 rounded" onClick={() => handlePageChange(1)}>
                1
              </button>
              {currentPage > 3 && <span>...</span>}
            </>
          )}

          {/* Current Page and Nearby Pages */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => page === currentPage || page === currentPage - 1 || page === currentPage + 1)
            .map((page) => (
              <button
                key={page}
                className={`px-3 py-1 border border-gray-300 rounded ${page === currentPage ? "bg-gray-700 text-white" : ""}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

          {/* Last Page */}
          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && <span>...</span>}
              <button className="px-3 py-1 border border-gray-300 rounded" onClick={() => handlePageChange(totalPages)}>
                {totalPages}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default VenueLists;
