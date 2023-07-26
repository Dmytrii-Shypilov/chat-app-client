import s from "./chat-page.module.scss";

import { io } from "socket.io-client";

import { useEffect, useState } from "react";
import ChatSection from "../../components/ChatSection";
import DialogsSection from "../../components/Dialogs/DialogsSection";
import { ScopedCssBaseline } from "@mui/material";

const ChatPage = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io.connect("http://localhost:4000");
    setSocket(socketInstance);
  }, []);


  useEffect(() => {
    if (socket) {
      socket.emit("add-user", { id: "444444444444" });
    }
  }, [socket]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("notify", (obj) => {
  //       console.log(obj);
  //     });
  //   }
  // }, [socket]);

  return (
    <section className={s.section}>
      <DialogsSection />
      <ChatSection />
    </section>
  );
};

export default ChatPage;
