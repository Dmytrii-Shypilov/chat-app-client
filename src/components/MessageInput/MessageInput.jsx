import s from "./message-input.module.scss";

import { useState } from "react";
import { SendIcon } from "../../images/svg/SendIcon";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getUser } from "../../redux/user/user-selector";
import { useContext } from "react";
import { SocketContext } from "../../context/socketContext";

const MessageInput = ({ messages, setOutcomingMessage, chatId }) => {
  const [message, setMessage] = useState("");
  const { emitSocketEvent } = useContext(SocketContext);
  const { name, id } = useSelector(getUser);

  const onInput = (e) => {
    setMessage(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    setOutcomingMessage((prevState) => {
      console.log("messages", messages);
      const time = new Date().getTime();
      const allMessages = [...messages];
      console.log(allMessages);
      if (allMessages.length) {
        let lastMessage;
        const outcoming = allMessages.filter((mess) => mess.from === id);
        console.log("outcoming", outcoming);

        if (outcoming.length > 1) {
          console.log("all > 1", allMessages);
          const sorted = outcoming.toSorted(
            (a, b) => a.messageContent.at(-1).time - b.messageContent.at(-1).time
          );
          lastMessage = sorted.at(-1);
          console.log("lastMessage", lastMessage);

        } else if (outcoming.length === 1) {
          lastMessage = outcoming[0];
          console.log("lastMessage 1 only", lastMessage);
        }

        const idx = allMessages.indexOf(lastMessage);
        console.log("idx", idx);

        if (time - lastMessage.messageContent[lastMessage.messageContent.length - 1].time < 3000) {
          const text = {
            message,
            time,
            isRead: false,
          };
          allMessages[idx].messageContent.push(text);
          emitSocketEvent('addMessage', {dialogId: chatId, lastMessageIdx: idx, messageData: {from: id, message: text}})
          console.log("updated All", allMessages);
          return allMessages;

        } else {
          const text = {
            message,
            time,
            isRead: false,
          };
          const newMessage = { from: id, messageContent: [text] };
          emitSocketEvent('addMessage', {dialogId: chatId ,lastMessageIdx: null, messageData: {from: id, message: text}})
          return [...prevState, newMessage];
        }

      } else {
        const text = {
          message,
          time,
          isRead: false,
        };
        const newMessage = { from: id, messageContent: [text] };
        emitSocketEvent('addMessage', {dialogId: chatId, lastMessageIdx: null, messageData: {from: id, message: text}})
        return [...prevState, newMessage];
      }
    });
    setMessage("");
  };

  return (
    <form onSubmit={onSendMessage} className={s.messageInput}>
      <input
        onChange={onInput}
        value={message}
        className={s.input}
        type="text"
      />
      <button
        type="submit"
        className={s.sendBtn}
        disabled={message ? false : true}
      >
        <SendIcon className={s.sendIcon} />
      </button>
    </form>
  );
};

export default MessageInput;
