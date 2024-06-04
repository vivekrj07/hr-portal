import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const headingStyles = cva("text-dark not-italic", {
  variants: {
    variant: {
      h1: "text-[80px]",
      h2: "text-6xl",
      h3: "text-[40px]",
      h4: "text-3xl leading-10",
      h5: "text-2xl leading-9",
      h6: "text-xl leading-[30px]",
      h7: "text-lg leading-[26px]",
    },
    fontWeight: {
      regular: "font-light",
      bold: "font-semibold",
    },
  },
  defaultVariants: {
    variant: "primary",
    fontWeight: "regular",
  },
});

// eslint-disable-next-line react/prop-types
export const Heading = ({ variant, fontWeight, className, ...props }) => {
  const CustomTag = variant;
  return (
    <CustomTag
      {...props}
      className={twMerge(headingStyles({ variant, fontWeight }), className)}
    />
  );
};
