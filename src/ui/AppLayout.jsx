import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Header from "./NavBar";

function AppLayout() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
