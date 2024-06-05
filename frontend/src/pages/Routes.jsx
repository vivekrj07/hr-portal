import Home from "./Home";
import ForgetPassword from "./ForgetPassword";
import Otp from "./Otp";

const Routes = [
  {
    path: "/otp",
    element: <Otp />,
  },
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
