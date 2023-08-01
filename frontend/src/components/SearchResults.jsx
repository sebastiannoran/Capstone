import React from 'react';

export const SearchResults =({result,onSelectResult,handleChange}) => {

  const handleClick =() => {
    onSelectResult(result.name); 
    handleChange(result.name);
  }
  
  return (
    <div className="pt-2 pl-5 hover:bg-violet-200 font-serif" onClick={handleClick}>
      {result.name}
    </div>
  );

}