import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <ul>
          <li>Logo</li>
        </ul>
        <ul>
          <li>About</li>
        </ul>
        <ul>
          <li>Tours</li>
        </ul>
        <ul>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
