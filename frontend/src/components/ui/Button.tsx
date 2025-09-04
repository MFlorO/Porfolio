"use client"
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "border";
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  isLoading?: boolean
};

const Button = ({ children, variant = "solid", onClick, className, type = 'button', disabled = false, isLoading = false }: ButtonProps) => {

  const baseStyles="rounded-lg font-medium transition duration-200 cursor-pointer disabled:cursor-not-allowed";
  const solidStyles = "px-6 py-2 bg-[var(--color-accent-light)] text-white hover:bg-[var(--color-accent-light)] hover:opacity-90 hover:shadow-lg dark:bg-[var(--color-accent-dark)] dark:hover:bg-[var(--color-accent-dark)] dark:hover:opacity-80 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 transition-opacity duration-300";
  const outlineStyles="text-[var(--color-accent-light)] hover:text-black dark:hover:shadow-lg dark:hover:text-white dark:text-[var(--color-accent-dark)] disabled:text-gray-400 disabled:hover:text-gray-400";
  const borderStyles="px-[15px] py-[5px] text-[var(--color-accent-light)] border-[2px] border-[var(--color-accent-light)] hover:bg-[#ca5d8344] hover:shadow-lg dark:text-[var(--color-accent-dark)] dark:border-[var(--color-accent-dark)] dark:hover:bg-[#F8BBD014] disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent";

  return (
    <button
      onClick={onClick} 
      type={type}
      disabled={disabled} 
      className={clsx(
        baseStyles,
        variant === "solid" ? solidStyles : variant === "outline" ? outlineStyles : borderStyles,
        className
      )}
    >
      {
        isLoading
        ? <span className="spinner" />
        : children
      }
    </button>
  );
};

export default Button;
