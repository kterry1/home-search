import { FC } from "react";
import styles from "./display-housing-grid.module.css";

const DisplayHousingGrid: FC = () => {
  return (
    <div className={styles.display_housing_grid_container}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default DisplayHousingGrid;
