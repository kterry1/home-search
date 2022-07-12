import { FC, useContext } from "react";
import styles from "./selector.module.css";
import like from "../../../assets/decision-selector-icons/like.svg";
import dislike from "../../../assets/decision-selector-icons/dislike.svg";
import { SearchResultsContext } from "../../../context/searchResultsContext";

interface SelectorProps {
  decisionSelector: string;
}

const decisionSelectorToDisplay = (decisionSelector: string) => {
  switch (decisionSelector) {
    case "like":
      return like;
    case "dislike":
      return dislike;
    default:
      return;
  }
};

const Selector: FC<SelectorProps> = ({ decisionSelector }): JSX.Element => {
  const { setHouseSelectorDecision } = useContext(SearchResultsContext);
  return (
    <div
      onClick={() => {
        setHouseSelectorDecision(decisionSelector);
        setTimeout(() => {
          setHouseSelectorDecision("");
        }, 2000);
      }}
      className={styles[decisionSelector]}
    >
      <img width="40" src={decisionSelectorToDisplay(decisionSelector)} />
    </div>
  );
};

export default Selector;
