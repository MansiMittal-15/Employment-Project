import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home Page Data/Home' 
import Explore from "./Explore page data/Explore";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import UserProfile from "./Home Page Data/userProfile";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <Explore />
  }, 
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/viewProfile',
    element: <UserProfile />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
