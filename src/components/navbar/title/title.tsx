import { FC } from "react";
import styles from "./title.module.css";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = (props) => {
  return <div className={styles.title}>{props.title}</div>;
};

export default Title;
