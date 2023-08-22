import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body/Body";
import Profile from "./components/Profile/Profile";
import PostDetails from "./components/Post/PostDetails";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error/Error";
import AddPost from "./components/Post/AddPost";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
/**
 * Backend
 * -To do
 *  - add image upload
 *  - add tags
 *  - add data into database
 */

/**
 * FrontEnd
 * - To do
 *  - Profile
 *  - Body
 *  - Post Card
 *  - Post Details
 *  - Search
 */

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
      {
        path: "/addPost",
        element: <AddPost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default appRouter;
