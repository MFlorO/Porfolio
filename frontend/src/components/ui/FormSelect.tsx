import React from "react";
import { techOptions } from "@/utils/techOptions";

interface FormSelectProps {
  label?: string;
  placeholder: string;
  value: string[];
  onChange: (newValue: string[]) => void;
  error?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ label, placeholder, value, onChange, error }) => {

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected && !value.includes(selected)) {
      onChange([...value, selected]);
    }
  };

  const removeItem = (item: string) => onChange(value.filter((v) => v !== item));

  return (
    <div className="mb-3">

      {label &&  <label className="block text-sm font-medium mb-1 text-black">{label}</label>}
      <select
        onChange={handleSelect}
        className={`border rounded w-full p-3 bg-transparent placeholder-gray-400 hover:border-gray-400
          focus:outline-none focus:ring-2 focus:border-[var(--color-accent-light)] focus:ring-[var(--color-accent-light)]
          dark:focus:border-[var(--color-accent-dark)] dark:focus:ring-[var(--color-accent-dark)]
          active:border-[var(--color-accent-light)]
          dark:active:border-[var(--color-accent-dark)] text-black
          ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">{placeholder}</option>
        {techOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <div className="flex flex-wrap gap-2 mt-2">
        {value.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-black bg-pink-200 rounded-full text-sm flex items-center gap-2"
          >
            {item}
            <button
              type="button"
              onClick={() => removeItem(item)}
              className="text-red-400 hover:text-red-800 cursor-pointer"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FormSelect;
