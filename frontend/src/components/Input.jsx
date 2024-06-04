/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const inputStyles = cva(
  "outline-none w-full rounded-[10px] bg-transparent text-sm transition-all duration-200 ease-in-out p-2 ",
  {
    variants: {
      active: {
        true: "pt-6",
        false: "",
      },
    },
    type: {
      password: "",
      text: "",
      email: "",
    },

    defaultVariants: {
      active: false,
    },
  }
);

const labelStyles = cva(
  "absolute top-0 left-0 flex items-center text-primary-500 p-2 transition-all duration-200 ease-in-out",
  {
    variants: {
      active: {
        true: "text-xs",
        false: "text-sm",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export function Input({ type, name, children, className, ...props }) {
  const [active, setActive] = useState(false);

  function handleActivation(e) {
    setActive(!!e.target.value);
  }

  return (
    <div className="relative border rounded-[10px] mb-2 bg-white text-dark border-primary-500">
      <input
        className={twMerge(
          inputStyles({ active: active.toString() }),
          className
        )}
        id={name}
        name={name}
        type={type}
        onChange={handleActivation}
        {...props}
      />
      <label
        className={twMerge(
          labelStyles({ active: active.toString() }),
          className
        )}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
}
