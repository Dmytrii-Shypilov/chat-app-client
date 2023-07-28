import s from "./chat-section.module.scss";

import { useRef, useEffect, useState } from "react";
import MessageBox from "../MessageBox";
import MessageInput from "../MessageInput";


const ChatSection = ({socket}) => {
  const chat = useRef();
  
  const [messages, setMessages] = useState([])

  useEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, []);



  // navigator.geolocation.getCurrentPosition((pos) =>
  //   console.log(pos.coords.longitude, pos.coords.latitude)
  // );

  const messagesList = messages.map(({type, text, time})=><MessageBox type={type} text={text}/>)
 
console.log(messagesList)
  return (
    <section className={s.chatSection}>
      <div className={s.chatHeader}></div>
      <div ref={chat} className={s.chatField}>
        {messagesList}
      </div>
      <MessageInput allMessages={messages}setOutcomingMessage={setMessages}/>
    </section>
  );
};

export default ChatSection;
