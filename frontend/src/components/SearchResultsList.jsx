import React from 'react';
import {SearchResults} from './SearchResults';

export const SearchResultsList=({results,onSelectResult,handleChange})=>{
    return (
    <div className="w-full bg-white flex flex-col shadow-md rounded-md mt-1 max-h-24 overflow-y-auto">
        {
            results.map((result,id)=>{
                return <SearchResults 
                handleChange={handleChange}
                result={result} 
                key={id}
                onSelectResult={onSelectResult}
                />
            })}
    </div>
    );
};