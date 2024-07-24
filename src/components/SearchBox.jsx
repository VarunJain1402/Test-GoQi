import React, { useCallback } from 'react';
import _ from 'lodash';

const SearchBox = ({ setSearchTerm }) => {
  const debouncedSetSearchTerm = useCallback(_.debounce(setSearchTerm, 500), [setSearchTerm]);

  const handleChange = (e) => {
    debouncedSetSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg text-gray-700 placeholder-gray-400 hover:shadow-md hover:shadow-gray-500 transition-shadow duration-200 ease-in-out"
      />
    </div>
  );
};

export default SearchBox;
