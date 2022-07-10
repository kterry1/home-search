import { FC } from "react";
import styles from "./search-input.module.css";

const SearchInput: FC = () => {
  return (
    <form className={styles.search_input}>
      <input placeholder="Enter a Street Address..." />
    </form>
  );
};

export default SearchInput;
