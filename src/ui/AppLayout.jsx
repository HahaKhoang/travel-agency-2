import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Header from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
