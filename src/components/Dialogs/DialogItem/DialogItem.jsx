import s from "./dialog-item.module.scss";
import { memo } from "react";

import { Avatar } from "@mui/material";

const DialogItem = ({userName, time, message, unread}) => {
  return (
    <li className={s.dialog}>
      <Avatar>H</Avatar>
      <div className={s.info}>
        <div className={s.wrapper}>
          <span className={s.name}>{userName}</span>
          <span className={s.time}>{time}</span>
        </div>
        <div className={s.wrapper}>
          <span className={s.message}>{message}</span>
        
          <span className={s.unread}>{unread}</span>
         
         
        </div>
      </div>
    </li>
  );
};

export default memo(DialogItem);
