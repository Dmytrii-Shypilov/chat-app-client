import s from "./chat-section.module.scss";

import { useRef, useEffect, useState } from "react";
import MessageBox from "../MessageBox";
import MessageInput from "../MessageInput";


const ChatSection = () => {
  const chat = useRef();
  

  useEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, []);

  // navigator.geolocation.getCurrentPosition((pos) =>
  //   console.log(pos.coords.longitude, pos.coords.latitude)
  // );

  
  return (
    <section className={s.chatSection}>
      <div className={s.chatHeader}></div>
      <div ref={chat} className={s.chatField}>
        <MessageBox
          type="incoming"
          text={[
            "Hey! How are you? Are you planning to go out tonight?",
            "Ah?",
          ]}
        />
        <MessageBox
          type="outcoming"
          text={[
            "Hey! How are you? Are you planning to go out tonight?",
            "We are leaving",
            "Soon",
            "Are you?",
          ]}
        />
        <MessageBox type="outcoming" text={["So what?"]} />
        <MessageBox
          type="incoming"
          text={[
            "Hey! How are you? Are you planning to go out tonight?",
            "Ah?",
          ]}
        />
        <MessageBox
          type="outcoming"
          text={[
            "Hey! How are you? Are you planning to go out tonight?",
            "We are leaving",
            "Soon",
            "Are you?",
          ]}
        />
        <MessageBox type="outcoming" text={["So what?"]} />
      </div>
      <MessageInput/>
    </section>
  );
};

export default ChatSection;
