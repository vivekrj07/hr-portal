import Home from "./Home";
import ForgetPassword from "./ForgetPassword";

const Routes = [
  {
    path: "/forgot-password",
    element: <ForgetPassword />,
  },
  {
    path: "/",
    element: <Home />,
  },
];

export default Routes;
