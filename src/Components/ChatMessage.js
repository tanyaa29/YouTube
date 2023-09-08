import React, { useEffect } from "react";

const ChatMessage = ({ name, message }) => {
  useEffect(() => {
    const i= setInterval(() => {
        
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex items-center shadow p-2">
      <img
        className="h-8 "
        alt="user"
        src="https://www.pngfind.com/pngs/m/176-1760995_png-file-svg-user-icon-free-copyright-transparent.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
