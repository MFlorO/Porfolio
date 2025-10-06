import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

const AIMessage = ({ text }: Props) => {
  return (
    <div className="flex w-full items-start space-x-2 max-w-full p-3 text-sm">

      <div className="flex flex-shrink-0 w-[45px] md:w-[55px] h-[40px] md:h-[50px] 
        items-center justify-center rounded-full bg-[var(--color-accent-light)] 
        dark:bg-[var(--color-accent-dark)] text-xl">
        🤖
      </div>

      {/* Contenido */}
      <div className="flex flex-col bg-black/50 p-3 rounded-xl shadow-md 
        max-w-[calc(100%-60px)] break-words">
        <span className="text-[10px] font-semibold text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)] mb-1">
          AI
        </span>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AIMessage;
