import { useState, createContext, useEffect } from "react";
export const CollegeContext = createContext();

// AuthProvider.js
const CollegeProvider = ({ children }) => {
  const [currentCollege, setCurrentCollege] = useState(null);
  const getCurrentCollege = () => currentCollege;

  return (
    <CollegeContext.Provider
      value={{
        currentCollege,
        setCurrentCollege,
        getCurrentCollege,
        // isAuthChecked,
        // authError,
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
};

export default CollegeProvider;
