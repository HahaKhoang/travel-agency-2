import { Outlet, useNavigation } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";
import NavBarContainer from "./NavBarContainer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles.container}>
      {isLoading && <LoadingSpinner />}
      <NavBarContainer />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
