import { createContext, useState } from "react";

const SearchResultsContext = createContext({
  searchResults: {},
  setSearchResults: (response) => response,
  houseSelectorDecision: "",
  setHouseSelectorDecision: (decision) => decision,
});

const SearchResultsContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState({});
  const [houseSelectorDecision, setHouseSelectorDecision] = useState("");

  return (
    <SearchResultsContext.Provider
      value={{
        searchResults,
        setSearchResults,
        houseSelectorDecision,
        setHouseSelectorDecision,
      }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};

export { SearchResultsContext, SearchResultsContextProvider };
