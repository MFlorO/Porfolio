import React from "react";
import clsx from "clsx";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={
        clsx(
          "text-2xl sm:text-3xl font-bold text-[var(--color-title-light)] tracking-tight dark:text-[var(--color-title-dark)]",
          className
        )
      }
    >
      {children}
    </h2>
  );
};

export default Title;
