import { createContext, useState } from "react";

const SearchResultsContext = createContext({
  searchResults: {},
  setSearchResults: (response) => response,
});

const SearchResultsContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState({});

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export { SearchResultsContext, SearchResultsContextProvider };
