import { FC, useContext } from "react";
import DisplayHousingGrid from "./components/display-housing-grid";
import Navbar from "./components/navbar";
import SearchInput from "./components/search-input";
import { SearchResultsContext } from "./context/searchResultsContext";

const App: FC = () => {
  const { searchResults } = useContext(SearchResultsContext);
  return (
    <div>
      <Navbar />
      <SearchInput />
      <DisplayHousingGrid searchResults={searchResults} />
    </div>
  );
};

export default App;
