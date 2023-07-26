import s from "./message-input.module.scss";

import { useState } from "react";
import { SendIcon } from "../../images/svg/SendIcon";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const onInput = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={s.messageInput}>
      <input onChange={onInput} value={message} className={s.input} type="text" />
      <span className={s.sendBtn}>
        <SendIcon className={s.sendIcon} />
      </span>
    </div>
  );
};

export default MessageInput;
