import { FC } from "react";
import styles from "./App.module.css";
import Navbar from "./components/navbar";

const App: FC = () => {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
};

export default App;
