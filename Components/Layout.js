import React from "react";
import Nav from "./Navbar";
import Header from "./Header";
import Meta from './Meta'
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
