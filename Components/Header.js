import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Webdev</span> Newz
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest webdev news
      </p>
    </div>
  );
};

export default Header;
