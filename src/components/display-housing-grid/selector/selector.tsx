import { FC } from "react";
import styles from "./selector.module.css";

interface SelectorProps {
  decisionSelector: string;
}

const Selector: FC<SelectorProps> = ({ decisionSelector }) => {
  return <div className={styles.dislike}></div>;
};

export default Selector;
