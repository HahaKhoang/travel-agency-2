import styles from "./AppLayout.module.scss";
import Header from "./Header";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default AppLayout;
