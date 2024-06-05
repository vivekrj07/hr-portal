/* eslint-disable react/prop-types */
"use client";

import React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { twMerge } from "tailwind-merge";

export const InputOTP = React.forwardRef(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={twMerge(
        "flex items-center gap-4 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={twMerge("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
);
InputOTP.displayName = "InputOTP";

export const InputOTPGroup = React.forwardRef(
  ({ className, ...props }, ref) => (
    <di
      ref={ref}
      className={twMerge("flex  gap-5 justify-between  items-center", className)}
      {...props}
    />
  )
);
InputOTPGroup.displayName = "InputOTPGroup";

export const InputOTPSlot = React.forwardRef(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
      <div
        ref={ref}
        className={twMerge(
          "relative flex h-10 w-10 items-center  justify-center order border border-primary-500 rounded-[10px] border-solid  text-sm transition-all ",
          isActive && "z-10 ring-2 ring-ring ring-offset-background",
          className
        )}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-primary-500 duration-1000" />
          </div>
        )}
      </div>
    );
  }
);

InputOTPSlot.displayName = "InputOTPSlot";
