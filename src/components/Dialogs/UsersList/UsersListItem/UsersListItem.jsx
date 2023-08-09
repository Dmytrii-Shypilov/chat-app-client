import s from "./users-list-item.module.scss";

import { memo } from "react";

import { Avatar } from "@mui/material";
import { AddUserIcon } from "../../../../images/svg/AddUserIcon";
import { SocketContext } from "../../../../context/socketContext";
import { useContext } from "react";
import { useEffect } from "react";

const UserslistItem = ({ name, _id, dialogs }) => {

  const {socket, user} = useContext(SocketContext)

  const isFriend  = Boolean((dialogs.filter(part=> part.id === user.id)).length)

  const sendDialogRequest = (e) => {
    if (socket && socket.connected) {
      socket.emit('createDialog',{colocutorId: _id, colocutorName: name})
    }
  } 

  // useEffect(()=> {
  //   if(socket) {
  //     console.log(socket.id)
  //     socket.on('updateDialogs', (data)=> console.log(data))
  //   }
  // }, [])

  return (
    <li className={s.user}>
      <Avatar>{name[0].toUpperCase()}</Avatar>
      <div className={s.info}>
        <span className={s.name}>{name}</span>
        <span  onClick={sendDialogRequest}>
          {!isFriend ? (
            <AddUserIcon className={s.icon} height="17" />
          ) : (
            <span>friend</span>
          )}
        </span>
      </div>
    </li>
  );
};

export default memo(UserslistItem);
