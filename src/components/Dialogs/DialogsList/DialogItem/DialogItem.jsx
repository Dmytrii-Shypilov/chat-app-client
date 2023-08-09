import s from "./dialog-item.module.scss";
import { memo } from "react";

import { Avatar } from "@mui/material";

const DialogItem = ({ colocutor, dialog }) => {
  const { name } = colocutor;

  const requestedFriendship = dialog.participants.find(
    (el) => el.id === colocutor.id
  ).accepted;

  const allAcceptedInvite = dialog.participants.every((el) => el.accepted);

  if (requestedFriendship) {
    return (
      <li className={s.dialog} id={dialog.id}>
        <Avatar>{name[0].toUpperCase()}</Avatar>
        <div className={s.info}>
          <div className={s.wrapper}>
            <span className={s.name}>{name}</span>
          </div>
        </div>
        <span>Accept Invite</span>
      </li>
    );
  }
  if (allAcceptedInvite) {
    return (
      <li className={s.dialog} id={dialog.id}>
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
