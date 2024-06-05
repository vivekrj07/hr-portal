import { Link} from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";

export default function ForgetPassword() {
  return (
    <>
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
        <Link to="/" className="flex gap-1 ">
         
            <img src="/arrow-left.svg" />
          
          <Heading fontWeight="bold" variant="h7">
            Back
          </Heading>
        </Link>

        <Heading fontWeight="bold" variant="h4" className="mt-10 ">
          Forgot Password
        </Heading>
        <p className="mt-px mb-[30px] font-light text-gray">
        Enter your registered email address. we’ll send you a code to reset your password.
        </p>
        <form className="">
          <div className="mb-4 ">
            <Input name="email" type="email" >
              Email Address
            </Input>
          </div>
          <Link to="/otp"> <Button className="w-full mt-7 ">Send OTP</Button></Link>
         
        </form>
      </div>
    </div>    </>
  );
}
