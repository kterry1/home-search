import { FC } from "react";
import styles from "./display-housing-grid.module.css";
import Selector from "./selector";
import defaultHouseImg from "../../assets/default-house-image.avif";
interface SearchResultsProps {
  searchResults: any;
}

const DisplayHousingGrid: FC<SearchResultsProps> = ({
  searchResults,
}: SearchResultsProps) => {
  return (
    <div className={styles.display_housing_grid_container}>
      <Selector decisionSelector="dislike" />
      <img
        height="300"
        width="400"
        src={searchResults.imgSrc || defaultHouseImg}
      />
      <Selector decisionSelector="like" />
    </div>
  );
};

export default DisplayHousingGrid;
