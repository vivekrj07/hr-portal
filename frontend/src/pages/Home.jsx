import { Link } from "react-router-dom";

import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

function Home() {
  return (
    <div className="p-7 grid grid-cols-2 items-center min-h-screen">
      <div className="bg-primary-10 rounded-[30px] h-full col-span-1 flex items-center justify-end">
        <img
          width="70%"
          className="h-auto rounded-tl-[36px] rounded-bl-[36px] "
          src="/image/Dashboard.png"
          alt="preview"
        />
      </div>
      <div className="mx-auto w-full max-w-[445px]">
        <div className="flex gap-3 ">
          <div className="bg-primary-500 rounded-full  items-center flex justify-center w-[53.254px] h-[53.254px] ">
            <img src="/meta-logo.svg" />
          </div>
          <Heading fontWeight="bold" variant="h3">
            HRMS
          </Heading>
        </div>

        <Heading fontWeight="bold" variant="h4" className="mt-10 ">
          Welcome <span>👋</span>
        </Heading>
        <p className="mt-px mb-[30px] font-light text-gray">
          Please Login here
        </p>
        <form className="">
          <div className="mb-4 ">
            <Input required name="email" type="email" >
              Email Address
            </Input>
          </div>
          <div className="mb-4">
            <Input name="password" type="password">
              Password
            </Input>
          </div>
          <div className="flex items-center  justify-between font-light ">
            <div className="flex gap-2">
              <input id="remember" type="checkbox"></input>
              <label htmlFor="remember">Remember Me</label>
            </div>

            <Link to="/forgot-password" className="text-primary-500 text-sm ">
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" className="w-full mt-7 ">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Home;
