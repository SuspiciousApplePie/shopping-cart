import { NavLink } from "react-router";
import styles from "./Sidebar.module.css";

function Sidebar({ sidebarToggle, toggleSidebar }) {
  return (
    <nav
      className={
        sidebarToggle ? styles.sidebar : `${styles.sidebar} ${styles.hide}`
      }
    >
      <ul className={styles.navigationList} inert={!sidebarToggle && true}>
        <li className={styles.navItem}>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={"/shop"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="m380-240 280-180-280-180v360ZM160-120q-33 0-56.5-23.5T80-200v-520h240v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h240v520q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
            </svg>
            Shop
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={"/cart"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            Cart
          </NavLink>
        </li>
      </ul>
      <div className={styles.toggleBtnWrapper}>
        <button
          type="button"
          aria-label="Sidebar toggle"
          className={styles.toggleBtn}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
