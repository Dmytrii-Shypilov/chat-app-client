import s from "./chat-section.module.scss";

import { useRef,useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getDialogs } from "../../redux/dialogs/dialogs-selector";
import MessageBox from "../MessageBox";
import MessageInput from "../MessageInput";
import Button from "../../ui/Button/Button";

const ChatSection = ({ chatData }) => {
  const [messages, setMessages] = useState([]);

  const chat = useRef()
  const {dialogs} = useSelector(getDialogs)
  const {chatId, colocutor} = chatData
  
  console.log('chatDta', chatData)

  const moveToBottom = () => {
    chat.current.scrollTop = chat.current.scrollHeight;
  };

  // check thes two useEffects


  useEffect(() => {
    const messages = dialogs.find(dial=> dial._id === chatId)?.messages
    setMessages(messages)
    moveToBottom();
    /// Event setting the messages to isRead: true
  }, [dialogs, chatData]);

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
  const messagesList = messages.map(({ from, messageContent }) => (
    <MessageBox from={from} messageContent={messageContent} />
  ));

  return (
    <section className={s.chatSection}>
      <div className={s.chatHeader}>
        <span className={s.colocutor}>{colocutor}</span>
        <Button type='light' style={{position: 'absolute', right: 25}}>
          delete dialog
        </Button>
      </div>
      <div ref={chat} className={s.chatField}>
        {messagesList}
      </div>
      <MessageInput messages={messages} chatId={chatId} setOutcomingMessage={setMessages} />
    </section>
  );
};

export default ChatSection;
