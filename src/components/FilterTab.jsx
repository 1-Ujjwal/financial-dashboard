import React from "react";

const FilterTab = ({ filter, setFilter }) => {
  return (
    <div className="p-8 border-b border-white/10">
      <div className="flex space-x-2 bg-gray-800/50 rounded-2xl p-2">
        {["all", "income", "expense"].map((filtertype) => (
          <button
            key={filtertype}
            onClick={() => setFilter(filtertype)}
            className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${filter === filtertype ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-gray-700/50"}`}
          >
            {filtertype === "all" ? "All Entries" : filtertype}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTab;
