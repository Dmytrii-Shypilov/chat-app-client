import s from "./users-list-item.module.scss";

import { memo } from "react";

import { Avatar } from "@mui/material";
import { AddUserIcon } from "../../../../images/svg/AddUserIcon";

const UserslistItem = ({ userName, isFriend }) => {
  return (
    <li className={s.user}>
      <Avatar>{userName[0].toUpperCase()}</Avatar>
      <div className={s.info}>
        <span className={s.name}>{userName}</span>
        <span>
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
