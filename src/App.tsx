import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Tour from "./pages/Tour";
import Inspiration from "./pages/Inspiration";
import Surprise from "./pages/Surprise";
import SurpriseTripTypes from "./pages/SurpriseTripTypes.jsx";
import SurpriseBooking from "./pages/SurpriseBooking";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Customized from "./pages/Customized";
import CustomizedBooking from "./pages/CustomizedBooking";
import Booking from "./pages/Booking";

import Test from "./pages/Test.js";
import SurpriseForm from "./ui/Surprise/SurpriseForm.tsx";
import CustomizedSteps from "./components/HowToSteps.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/all-tours",
        element: <Tours />,
        errorElement: <PageNotFound />,
      },
      { path: "/all-tours/:slug", element: <Tour /> },
      { path: "/inspiration", element: <Inspiration /> },
      { path: "/surprise-tour", element: <Surprise /> },
      { path: "/surprise-tour/trip-types", element: <SurpriseTripTypes /> },
      { path: "/surprise-tour/booking", element: <SurpriseBooking /> },
      { path: "/customized-tour", element: <Customized /> },
      { path: "/customized-tour/booking", element: <CustomizedBooking /> },
      { path: "/booking/:slug", element: <Booking /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
      { path: "/reviews", element: <Reviews /> },
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

// function App() {
//   return <CustomizedSteps />;
// }

export default App;
