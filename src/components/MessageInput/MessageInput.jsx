import s from "./message-input.module.scss";

import { useState } from "react";
import { SendIcon } from "../../images/svg/SendIcon";

const MessageInput = ({ messages, setOutcomingMessage}) => {
  const [message, setMessage] = useState("");

  const onInput = (e) => {
    setMessage(e.target.value);
  };

  const onSendMessage = () => {
    setOutcomingMessage((prevState) => {
      console.log("messages", messages);
      const time = new Date().getTime();
      const allMessages = [...messages];
      console.log(allMessages);
      if (allMessages.length) {
        let lastMessage;
        const outcoming = allMessages.filter(
          (mess) => mess.type === "outcoming"
        );
        console.log("outcoming", outcoming);
        if (outcoming.length > 1) {
          console.log("all > 1", allMessages);
          const sorted = outcoming.toSorted(
            (a, b) =>
              a.text[outcoming[outcoming.length-1].text.length - 1] -
              b.text[outcoming[outcoming.length-1].text.length - 1]
          );
          lastMessage = sorted[sorted.length - 1];
          console.log("lastMessage", lastMessage);
        } else if (outcoming.length === 1) {
          lastMessage = outcoming[0];
          console.log("lastMessage 1 only", lastMessage);
        }

        const idx = allMessages.indexOf(lastMessage);
        console.log("idx", idx);
        if (time - lastMessage.text[lastMessage.text.length - 1][1] < 3000) {
          allMessages[idx].text.push([message, time]);
          console.log("updated All", allMessages);
          return allMessages;
        } else {
          const newMessage = { type: "outcoming", text: [[message, time]] };
          return [...prevState, newMessage];
        }
      } else {
        const newMessage = { type: "outcoming", text: [[message, time]] };
        return [...prevState, newMessage];
      }
    });
    setMessage("");
  };

  return (
    <div className={s.messageInput}>
      <input
        onChange={onInput}
        value={message}
        className={s.input}
        type="text"
      />
      <button onClick={onSendMessage} className={s.sendBtn} disabled={message ? false : true}>
        <SendIcon  className={s.sendIcon} />
      </button>
    </div>
  );
};

export default MessageInput;
