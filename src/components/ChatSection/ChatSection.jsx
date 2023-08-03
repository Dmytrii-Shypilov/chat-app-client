import s from "./chat-section.module.scss";

import { useRef, useEffect, useState } from "react";
import MessageBox from "../MessageBox";
import MessageInput from "../MessageInput";

const ChatSection = ({ socket }) => {
  const chat = useRef();

  const [messages, setMessages] = useState([]);

  const moveToBottom = () => {
    chat.current.scrollTop = chat.current.scrollHeight;
  };

  useEffect(() => {
    moveToBottom();
  }, []);

  useEffect(() => {
    moveToBottom();
  }, [messages]);

  // navigator.geolocation.getCurrentPosition((pos) =>
  //   console.log(pos.coords.longitude, pos.coords.latitude)
  // );

  // CHECK MESSAGE BOX MEMOIZATION  - DETECTION OF THE PROPS CHANGE (CONSIQUENTLY ADDED MESSAGE DOESN'T 
  // CHANGE. TEXT ARRAY IS MUTATED BY ADDING NEW ELEMENT. SUPPOSE TO CHANGE A REFFERENCE TO IT BY 
  // DESTRUCT-N AND ADDING NEW EL-T BUT NOT BY PUSHING NEW MESSAGE.
  // PROP CHANGE IS DETECTED BY REF CHANGE TO THE OBJ)
  const messagesList = messages.map(({ type, text }) => (
    <MessageBox type={type} text={text} />
  ));

  return (
    <section className={s.chatSection}>
      <div className={s.chatHeader}></div>
      <div ref={chat} className={s.chatField}>
        {messagesList}
      </div>
      <MessageInput messages={messages} setOutcomingMessage={setMessages} />
    </section>
  );
};

export default ChatSection;
