import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";
import NotFound from "../pages/not-found";
export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "sign-up", element: <SignUp /> },
  { path: "sign-in", element: <SignIn /> },
  { path: "*", element: <NotFound /> },
]);
