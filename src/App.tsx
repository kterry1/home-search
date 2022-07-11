import { FC } from "react";
import DisplayHousingGrid from "./components/display-housing-grid";
import Navbar from "./components/navbar";
import SearchInput from "./components/search-input";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <SearchInput />
      <DisplayHousingGrid />
    </div>
  );
};

export default App;
