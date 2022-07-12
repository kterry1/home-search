import { FC, useContext } from "react";
import styles from "./display-housing-grid.module.css";
import Selector from "./selector";
import defaultHouseImg from "../../assets/default-house-image/default-house-image.avif";
import { SearchResultsContext } from "../../context/searchResultsContext";
interface SearchResultsProps {
  searchResults: any;
}

const DisplayHousingGrid: FC<SearchResultsProps> = ({
  searchResults,
}: SearchResultsProps) => {
  const { houseSelectorDecision } = useContext(SearchResultsContext);
  return (
    <div className={styles.display_housing_grid_container}>
      <Selector decisionSelector="dislike" />
      <img
        className={styles[`${houseSelectorDecision}_selection`]}
        height="300"
        width="400"
        src={searchResults.imgSrc || defaultHouseImg}
      />
      <Selector decisionSelector="like" />
    </div>
  );
};

export default DisplayHousingGrid;
