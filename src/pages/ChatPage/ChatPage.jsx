import s from "./chat-page.module.scss";

import { useEffect, useState } from "react";
import ChatSection from "../../components/ChatSection";
import DialogsSection from "../../components/Dialogs/DialogsSection";
import { SocketContextProvider } from "../../context/socketContext";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/user/user-selector";
import { getAllUsers } from "../../redux/allUsers/allUsers-operations";
import { getCurrentUser } from "../../redux/user/user-operations";
import { getAllDialogs } from "../../redux/dialogs/dialogs-operations";
const ChatPage = () => {
  const [socket, setSocket] = useState(null);
  const { name, token } = useSelector(getUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser(token));
      dispatch(getAllUsers(token));
      dispatch(getAllDialogs(token))
    }
  }, []);

  // useEffect(() => {
  //   // let newSocket;

  //   // const storeSocketId = localStorage.getItem("socketId");
  //   // if (storeSocketId) {
  //   //   newSocket = io.connect("http://localhost:4000", {
  //   //     query: { socketId: storeSocketId },
  //   //   });
  //   // }
  //   const newSocket = io.connect("http://localhost:4000", {
  //     query: {
  //       user: name,
  //     },
  //   });

  //   setSocket(newSocket);

  //   return () => {
  //     if (newSocket) {
  //       newSocket.disconnect();
  //     }
  //   };
  // }, []);

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
    <SocketContextProvider>
      <section className={s.section}>
        <DialogsSection socket={socket} />
        <ChatSection socket={socket} />
      </section>
    </SocketContextProvider>
  );
};

export default ChatPage;
