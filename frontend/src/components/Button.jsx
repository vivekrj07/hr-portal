/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  "text-white font-poppins inline-flex justify-center items-center gap-2.5 shrink-0 rounded-10p border-0",
  {
    variants: {
      variant: {
        primary: "bg-primary-500",
        icon: "",
      },
      size: {
        giant: "h-14 p-5",
        large: "h-[50px] p-5",
        medium: "h-10 p-2.5",
        small: "h-[34px] p-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
);

export const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      {...props}  
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};
