import { FC, useState } from "react";
import styles from "./search-input.module.css";

const getZillowData = (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  searchRequest: string
): void => {
  e.preventDefault();
  const API_KEY = process.env.REACT_APP_ZILLOW_API_KEY;
  const modifySearchStringForFetchRequest = searchRequest
    .replace(/,/gm, "")
    .replace(/ /gm, "%20");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY ?? "",
      "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
    },
  };

  fetch(
    `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${modifySearchStringForFetchRequest}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.totalResultCount > 1) {
        alert("Be more specific");
      } else {
        fetch(
          `https://zillow-com1.p.rapidapi.com/property?zpid=${response.zpid}`,
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.error(err));
};

const SearchInput: FC = () => {
  const [searchRequest, setSearchRequest] = useState("");
  return (
    <form className={styles.search_input} onSubmit={(e) => console.log({ e })}>
      <div className={styles.search_input_title}>
        The easiest way to buy without a hassle.
      </div>
      <label htmlFor="search_input"></label>
      <input
        type="text"
        id="search_input"
        name="search_input"
        placeholder="Enter a Street Address . . ."
        onChange={(e) => setSearchRequest(e.target.value)}
        value={searchRequest}
      />
      <input
        type="submit"
        value="Search Away"
        onClick={(e) => getZillowData(e, searchRequest)}
      />
    </form>
  );
};

export default SearchInput;
