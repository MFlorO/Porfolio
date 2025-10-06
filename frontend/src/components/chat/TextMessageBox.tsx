"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "../ui";

interface Props {
  onSendMessage: (text: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

const TextMessageBox = ({ onSendMessage, placeholder, isLoading }: Props) => {
    
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    onSendMessage(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="relative flex flex-row items-center rounded-lg text-sm" onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder || "Escribí un mensaje..."}
        className="flex-1 bg-gray-900 text-white rounded-lg px-3 py-2 outline-none"
        spellCheck={!isLoading}
      />
      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-400 px-3! hover:bg-pink-500 transition md:px-g"
        disabled={isLoading}
        isLoading={isLoading}
        type='submit'
        >
        → 
      </Button>
    </form>
  );
};

export default TextMessageBox;
