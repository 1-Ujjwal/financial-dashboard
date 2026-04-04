import React from "react";

const FilterTab = () => {
  return (
    <div className="p-8 border-b border-white/10">
      <div className="flex space-x-2 bg-gray-800/50 rounded-2xl p-2">
        <div className="flex space-x-2 bg-gray-800/50 rounded-2xl p-2">
          <button
            className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold capitalize transition-all duration-200`}
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterTab;
