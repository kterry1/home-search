import React from "react";

interface MenuIconProps {
  styles: any;
}

const MenuIcon = ({ styles }: MenuIconProps) => {
  return (
    <div className={styles.menu_btn_border}>
      <div className={styles.menu_btn_burger}></div>
    </div>
  );
};

export default MenuIcon;
