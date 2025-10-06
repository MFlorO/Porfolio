import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

export const UserMessage = ({ text }: Props) => {
  return (
    <div className="flex w-full items-start justify-end space-x-2 max-w-full p-3 text-sm">

      <div className="flex flex-col bg-[var(--color-accent-light)] dark:bg-[var(--color-accent-dark)] 
        p-3 rounded-xl shadow-md max-w-[calc(100%-60px)] break-words text-white">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>

      {/* Avatar */}
      <div className="flex flex-shrink-0 w-[45px] md:w-[55px] h-[40px] md:h-[50px] 
        items-center justify-center rounded-full bg-white/10 dark:bg-black/50 text-xl">
        👤
      </div>
    </div>
  );
};

export default UserMessage;
