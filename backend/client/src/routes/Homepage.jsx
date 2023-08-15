import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { AuthContext } from "../contexts/AuthContext";
import AboutUsSection from "./AboutUs";

const Homepage = () => {
  const { currentUser } = useContext(AuthContext);
  const [currentCollege, setCurrentCollege] = useState(null);

  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);

    navigate({
      pathname: `/colleges/${currentCollege.id}`,
      state: { searchQuery: query },
    });
  };

  const handleSelect = (result) => {
    setCurrentCollege(result);
    // console.log(`Current College: ${currentCollege.id}`);
  };

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="h-screen  bg-[#272727] h-screen flex flex-col">
      <div className="flex-1 p-8 flex flex-col justify-center items-center">
        <p className="text-5xl mb-8 font-bold text-white">Welcome to Insight</p>
        <p className="text-xl  mb-5 text-[#b7b7b7]">
          Start Searching for CUNY Colleges
        </p>
        <div className="flex gap-1">
          <div className="flex-1 mr-2">
            <SearchBar
              setResults={setResults}
              input={input}
              handleChange={handleChange}
              value={searchQuery}
              onSubmit={handleSearch}
              setCollege={setCurrentCollege}
            />
            <SearchResultsList
              results={results}
              handleChange={handleChange}
              onSelectResult={handleSelect}
            />
          </div>
          <div>
            <button
              className="px-6 py-2 bg-fuchsia-500 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
              hover:bg-fuchsia-500 transition duration-200 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]
              font-bold  border-b-[1px] border-fuchsia-700"
              onClick={() => handleSearch(searchQuery)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
     
        <AboutUsSection />
      
    </div>
  );
};

export default Homepage;

