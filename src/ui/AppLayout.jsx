import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";
import NavBar from "./NavBar";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles.container}>
      <ScrollRestoration />
      {isLoading && <LoadingSpinner />}
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
