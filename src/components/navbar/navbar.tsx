import { FC } from "react";
import MenuIcon from "../../assets/menu-icon";
import styles from "./navbar.module.css";
import Title from "./title";
import logo from "../../assets/logo/magnifying-glass.svg";

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left_side_nav_container}>
        <img src={logo} width="30" height="30" alt="mangifying glass logo" />
        <Title title="Home Search" />
      </div>
      <div className={styles.right_side_nav_container}>
        <div className={styles.sign_in_text} data-testid="sign-in">
          Sign In
        </div>
        <MenuIcon styles={styles} />
      </div>
    </nav>
  );
};

export default Navbar;
