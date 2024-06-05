import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";

import { Button } from "../components/Button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/InputOTP";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function Otp() {
  const [isOpen, setIsOpen] = useState(false);

  function onSubmitForm(e) {
    e.preventDefault();
    setIsOpen(true);
  }

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
            Enter OTP
          </Heading>
          <p className="mt-px mb-[30px] font-light text-gray">
            We have share a code of your registered email address
            robertallen@example.com
          </p>
          <form onSubmit={onSubmitForm} className="">
            <div className=" flex justify-center">
              <InputOTP maxLength={5}>
                <InputOTPGroup>
                  <InputOTPSlot hasFakeCaret index={0}/>
                  <InputOTPSlot hasFakeCaret index={1}/>
                  <InputOTPSlot hasFakeCaret index={2}/>
                  <InputOTPSlot hasFakeCaret index={3}/>
                  <InputOTPSlot hasFakeCaret index={4} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button type="submit" className="w-full mt-7">
              Verify
            </Button>
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-50 transition-opacity duration-1000 ease-out "
            >
              <div className="fixed inset-0 flex  items-center justify-center p-4  backdrop-blur-[7px]" >
                <DialogPanel className="max-w-[436px]  space-y-4 rounded-[30px]    bg-white p-7">
                <span className=" flex justify-center items-center text-[100px] ">🎉</span>
                  <DialogTitle className=" text-center text-3xl font-semibold leading-10" >
                    
                    Password Update Successfully
                  </DialogTitle>

                  <Description className=" text-gray text-center  font-light leading-6">Your password has been update successfully</Description>

                  <Button onClick={() => setIsOpen(false)}  className="w-full mt-7 ">
                    Back to login
                  </Button>
                </DialogPanel>
              </div>
            </Dialog>
          </form>
        </div>
      </div>
    </>
  );
}
