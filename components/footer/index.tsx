import React from "react";
import styles from '../../styles/Home.module.css'

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className={styles.footer}>
        <span className={styles.logo}>© Glosseta Foundation, 2022</span>
      </footer>
    </>
  );
};

export default Footer;
