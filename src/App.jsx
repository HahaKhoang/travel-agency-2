import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<Tours />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
