import s from "./dialogs.module.scss";

import { Avatar } from "@mui/material";

import DialogsList from "./DialogsList";
import { SearchIcon } from "../../images/svg/SearchIcon";
import SwitchableIcon from "../SwitchableIcon";
import UsersList from "./UsersList";
import { useEffect, useState } from "react";
import { LogOutIcon } from "../../images/svg/LogOutIcon";
import { logOutUser } from "../../redux/user/user-operations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SocketContext } from "../../context/socketContext";
import { getUser } from "../../redux/user/user-selector";
import { obtainAllUsers } from "../../redux/allUsers/allUsers-selector";

const DialogsSection = () => {
  const [view, setView] = useState("dialogs");
  const [dialogs, setDialogs] = useState([]);
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const { token, name } = useSelector(getUser);
  const { allUsers } = useSelector(obtainAllUsers);
  const { socket } = useContext(SocketContext);

  const onLogOut = () => {
    if (socket) {
      socket.disconnect();
    }
    dispatch(logOutUser(token));
  };

  return (
    <section className={s.section}>
      <div className={s.header}>
        <Avatar>{name[0]}</Avatar>
        <span className={s.name}>{name}</span>
        <button className={s.logOutBtn} onClick={onLogOut}>
          <LogOutIcon className={s.logOutIcon} />
        </button>
      </div>

      <div className={s.searchBox}>
        <SearchIcon className={s.icon} />
        <input className={s.searchInput} type="text" />
        <SwitchableIcon view={view} setView={setView} />
      </div>
      {view === "dialogs" && <DialogsList dialogs={allUsers} />}
      {view === "users" && <UsersList users={allUsers} />}
    </section>
  );
};

export default DialogsSection;
