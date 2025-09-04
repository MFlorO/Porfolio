import clsx from "clsx";
import React from "react";

interface FormInputProps {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  className?: string;
}

const FormInput = ({ label, name, type = "text", placeholder, value, onChange, onBlur, error, className }: FormInputProps) => {

  const baseStyles = `
    border rounded w-full p-3 bg-transparent placeholder-gray-400 text-black hover:border-gray-400
    focus:outline-none focus:ring-2 focus:border-[var(--color-accent-light)] focus:ring-[var(--color-accent-light)]
    dark:focus:border-[var(--color-accent-dark)] dark:focus:ring-[var(--color-accent-dark)]
    active:border-[var(--color-accent-light)]
    dark:active:border-[var(--color-accent-dark)]
  `;

  return (
    <div className="mb-3">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          baseStyles,
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
