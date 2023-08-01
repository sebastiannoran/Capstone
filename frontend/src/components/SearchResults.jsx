import React from 'react';


export const SearchResults =({result,onSelectResult}) =>{

    
    return <div className="pt-2 pl-5 hover:bg-violet-200 font-serif" >{result.name}</div>;  
};