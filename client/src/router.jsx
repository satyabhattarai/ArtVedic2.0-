import About from "./Components/About";
import Artist from "./Components/Artist";
import Artistform from "./Components/Artistform";
import BidRequests from "./Components/BidRequests";
import Cart from "./Components/Cart";
import Category from "./Components/Category";
import Chooseform from "./Components/Chooseform";
import Commissions from "./Components/Commissions";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Gallery from "./Components/Gallery";
import GuestLayout from "./Layout/GuestLayout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Productitem from "./Components/Productitem";
import Search from "./Components/Search";
import Signup from "./Components/Signup";
import Uploadform from "./Components/Uploadform";
import UserLayout from "./Layout/UserLayout";
import Workshop from "./Components/Workshop";
import Workshopform from "./Components/Workshopform";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:type",
        element: <Category />,
      },
      {
        path: "/artistprofile/:artist_email",
        element: <Artist />,
      },

      {
        path: "/artistform",
        element: <Artistform />,
      },
      {
        path: "/chooseform",
        element: <Chooseform />,
      },
      {
        path: "/uploadform",
        element: <Uploadform />,
      },
      {
        path: "/bidrequests",
        element: <BidRequests />,
      },
      {
        path: "/commissions",
        element: <Commissions />,
      },
      {
        path: "/workshopform",
        element: <Workshopform />,
      },
      {
        path: "/art/:id",
        element: <Productitem />,
      },
      {
        path: "/art/:id",
        element: <Productitem />,
      },
      {
        path: "/work/:id",
        element: <Workshop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);
export default router;
