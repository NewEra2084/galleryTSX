import type { MouseEventHandler } from "react";

type variants = "small" | "md" | "big";
const Variants: Record<variants, string> = {
  small: " p-1 lg:px-2 ",
  md: " p-2 lg:p-3 ",
  big: " p-3 lg:p-4 ",
};

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: variants;
  border?: boolean;
};

export const Button = ({
  children,
  className,
  variant = "md",
  border = false,
  ...props
}: Props) => {
  const classNameVariant = Variants[variant];
  return (
    <button
      className={
        `dark:text-White text-Dark bg-none hover:bg-third dark:hover:bg-third-dark rounded-lg ${
          border && "border border-Dark dark:border-White"
        } h-fit` +
        classNameVariant +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};
