import s from "./chat-page.module.scss";

import { io } from "socket.io-client";

import { useEffect, useState } from "react";
import ChatSection from "../../components/ChatSection";
import DialogsSection from "../../components/Dialogs/DialogsSection";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/user/user-selector";


const ChatPage = () => {
  const [socket, setSocket] = useState(null);
  const {name} = useSelector(getUser)
  useEffect(() => {
    // let newSocket;

    // const storeSocketId = localStorage.getItem("socketId");
    // if (storeSocketId) {
    //   newSocket = io.connect("http://localhost:4000", {
    //     query: { socketId: storeSocketId },
    //   });
    // }
     const newSocket = io.connect("http://localhost:4000", {
      query: {
        user: name,
      }
     });

     setSocket(newSocket)
    
     return ()=> {
      if (newSocket) {
        newSocket.disconnect()
      }
     }
    
  }, []);

  // useEffect(() => {
  //   if (socket) {
  //     socket.emit("add-user", { id: "444444444444" });
  //   }
  // }, [socket]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("notify", (obj) => {
  //       console.log(obj);
  //     });
  //   }
  // }, [socket]);

  return (
    <section className={s.section}>
      <DialogsSection socket={socket} />
      <ChatSection socket={socket} />
    </section>
  );
};

export default ChatPage;
