import s from "./message-input.module.scss";

import { useState } from "react";
import { SendIcon } from "../../images/svg/SendIcon";

const MessageInput = ({allMessages, setOutcomingMessage}) => {
  const [message, setMessage] = useState("");

  const onInput = (e) => {
    setMessage(e.target.value);
    
  };

 
const onSendMessage =()=> {
  setOutcomingMessage(prevState => {
    const time = new Date().getTime()
    const newMessage = {type: 'outcoming', text: [message], }
    return [...prevState, newMessage]
  })
  setMessage('')
}

  return (
    <div className={s.messageInput}>
      <input onChange={onInput} value={message} className={s.input} type="text" />
      <span className={s.sendBtn}>
        <SendIcon onClick={onSendMessage} className={s.sendIcon} />
      </span>
    </div>
  );
};

export default MessageInput;
