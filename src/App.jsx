import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Tour from "./pages/Tour";
import Inspiration from "./pages/Inspiration";
import Surprise from "./pages/Surprise";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Customized from "./pages/Customized";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/tours",
        element: <Tours />,
        errorElement: <PageNotFound />,
      },
      { path: "/tours/:slug", element: <Tour /> },
      { path: "/inspiration", element: <Inspiration /> },
      { path: "/surprise", element: <Surprise /> },
      { path: "/customized-tour", element: <Customized /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
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
