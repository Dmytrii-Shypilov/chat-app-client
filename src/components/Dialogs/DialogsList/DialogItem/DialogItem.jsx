import s from "./dialog-item.module.scss";
import { memo } from "react";

import { Avatar } from "@mui/material";
import Button from "../../../../ui/Button";
import { useContext } from "react";
import { SocketContext } from "../../../../context/socketContext";

const DialogItem = ({ colocutor, dialog, openChat }) => {
  const { name } = colocutor;
  const {socket} = useContext(SocketContext)


  const requestedFriendship = dialog.participants.find(
    (el) => el.id === colocutor.id
  ).accepted;

    const openChatSection = () => {
      openChat({
        isChatOpen: true,
        chatData: {
          chatId: dialog.id,
          colocutor: name
        }
      })
    }

  const acceptInvite = () => {
   
    if (socket && socket.connected) {
      socket.emit('acceptInvite', {dialogId: dialog._id})
    }
  }

  const denyInvite = () => {
    if(socket) {
      socket.emit('denyInvite', {dialogId: dialog._id})
    }
  }
  // if all participants in a dialog have accepted the participation
  const allAcceptedInvite = dialog.participants.every((el) => el.accepted);

  if (requestedFriendship && !allAcceptedInvite) {
    return (
      <li className={s.dialog} id={dialog.id} key={dialog.id}>
        <Avatar>{name[0].toUpperCase()}</Avatar>
        <div className={s.info}>
          <div className={s.wrapper}>
            <span className={s.name}>{name}</span>
          </div>
        </div>
        <div className={s.btnsWrapper}>
          <Button onClick={acceptInvite} style={{marginRight: 5}}>accept</Button>
          <Button onClick={denyInvite}>deny</Button>
        </div>
      </li>
    );
  }
  if (allAcceptedInvite) {
    return (
      <li onClick={openChatSection} className={s.dialog} id={dialog.id} key={dialog.id}>
        <Avatar>{name[0].toUpperCase()}</Avatar>
        <div className={s.info}>
          <div className={s.wrapper}>
            <span className={s.name}>{name}</span>
            <span className={s.time}>11:30</span>
          </div>

          <div className={s.wrapper}>
            <span className={s.message}>Hi! How are you?</span>
            <span className={s.unread}>2</span>
          </div>
        </div>
      </li>
    );
  }
};

export default memo(DialogItem);
