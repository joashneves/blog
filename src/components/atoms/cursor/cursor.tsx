// Cursor.js
import React, { useEffect } from "react";
import styles from './cursor.module.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.cursor}`);

    const moveCursor = (e) => {
      cursor.left = `${e.clientX}px`;
      cursor.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className={styles.cursor}></div>;
};

export default Cursor;
