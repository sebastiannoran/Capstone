import React from "react";
import { SearchResults } from "./SearchResults";

export const SearchResultsList = ({
  results,
  onSelectResult,
  handleChange,
}) => {
  // console.log(results);
  return (
    <div className="w-full bg-white flex flex-col shadow-md rounded-md mt-1 max-h-24 overflow-y-auto">
      {results.map((result, id) => (
        <SearchResults
          handleChange={handleChange}
          result={result}
          key={id}
          onSelectResult={onSelectResult}
        />
      ))}
    </div>
  );
};
