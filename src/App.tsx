import { FC } from "react";
import Navbar from "./components/navbar";
import SearchInput from "./components/search-input";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <SearchInput />
      </div>
    </div>
  );
};

export default App;
