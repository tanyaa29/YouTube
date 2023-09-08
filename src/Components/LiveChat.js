import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [livemsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
          dispatch(addMessage({
            name: "Tanya Pahadi",
            message: livemsg,
          }))
          setLiveMsg("");
        }}
      >
        <input
          className="w-96 px-2"
          type="text"
          value={livemsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
