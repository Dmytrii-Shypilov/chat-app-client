import s from "./users-list-item.module.scss";

import { memo } from "react";

import { Avatar } from "@mui/material";
import { AddUserIcon } from "../../../../images/svg/AddUserIcon";

const UserslistItem = ({ name, isFriend }) => {
  return (
    <li className={s.user}>
      <Avatar>{name[0].toUpperCase()}</Avatar>
      <div className={s.info}>
        <span className={s.name}>{name}</span>
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
