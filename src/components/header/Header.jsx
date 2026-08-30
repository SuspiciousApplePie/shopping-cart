import styles from "./Header.module.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const header = document.querySelector(`.${styles.header}`);
    if (!header) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        header.offsetHeight + "px",
      );
    };

    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1>Shopping Cart</h1>
    </header>
  );
}

export default Header;
