import React from "react";

const TypingLoader = () => {
  return (
    <div className="flex space-x-2 items-center justify-start">
      <span className="w-3 h-3 rounded-full bg-white animate-bounce-loader [animation-delay:0ms]" />
      <span className="w-3 h-3 rounded-full bg-white animate-bounce-loader [animation-delay:200ms]" />
      <span className="w-3 h-3 rounded-full bg-white animate-bounce-loader [animation-delay:400ms]" />
    </div>
  );
};

export default TypingLoader;
