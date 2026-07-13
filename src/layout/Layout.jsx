import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>develped by</p>
        <a href="https://github.com/FTTM-M/cryptoApp" target="blank">
          FTTM
        </a>
      </footer>
    </>
  );
}

export default Layout;
