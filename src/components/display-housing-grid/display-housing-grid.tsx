import { FC } from "react";
import styles from "./display-housing-grid.module.css";

interface SearchResultsProps {
  searchResults: any;
}

const DisplayHousingGrid: FC<SearchResultsProps> = ({
  searchResults,
}: SearchResultsProps) => {
  return (
    <div className={styles.display_housing_grid_container}>
      <ul>
        {/* {searchResults.map((searchResult: any) => (
          <li>
            <img src={searchResult.imgSrc} />
          </li>
        ))} */}
        <img src={searchResults.imgSrc} />
      </ul>
    </div>
  );
};

export default DisplayHousingGrid;
