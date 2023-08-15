import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Tour from "./pages/Tour";
import Inspiration from "./pages/Inspiration";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />

          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<Tours />} />
          <Route path="tour" element={<Tour />}>
            <Route path="test1" element={<p>Test1 of sample tour</p>} />
            <Route path="test2" element={<p>Test2 of sample tour</p>} />
            <Route path="test3" element={<p>Test3 of sample tour</p>} />
          </Route>
          <Route path="inspiration" element={<Inspiration />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
