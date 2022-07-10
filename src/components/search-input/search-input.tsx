import { FC } from "react";
import styles from "./search-input.module.css";

const SearchInput: FC = () => {
  return (
    <form className={styles.search_input}>
      <div className={styles.search_input_title}>
        The easiest way to buy without a hassle.
      </div>
      <label htmlFor="search_input"></label>
      <input
        id="search_input"
        name="search_input"
        placeholder="Enter a Street Address . . ."
      />
    </form>
  );
};

export default SearchInput;
