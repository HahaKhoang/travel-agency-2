import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import styles from "./App.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours, { loader as tourLoader } from "./pages/Tours";
import Inspiration from "./pages/Inspiration";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/tours", element: <Tours />, loader: tourLoader },
      { path: "/tours/:tourName", element: <Tours /> },
      { path: "/inspiration", element: <Inspiration /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

{
  /* <BrowserRouter>
<Routes>
  <Route element={<AppLayout />}>
    <Route index element={<Navigate replace to="home" />} />

    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="tours" element={<Tours />} />
    <Route path="inspiration" element={<Inspiration />} />
    <Route path="faq" element={<FAQ />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<PageNotFound />} />
  </Route>
</Routes>
</BrowserRouter> */
}
