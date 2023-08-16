import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body/Body";
import Profile from "./components/Profile/Profile";
import PostDetails from "./components/PostDetails/PostDetails";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error/Error";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/postDetails/:id",
        element: <PostDetails />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default appRouter;
