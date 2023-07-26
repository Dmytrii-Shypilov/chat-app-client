import s from "./dialogs.module.scss";

import { Avatar} from "@mui/material";

import DialogsList from "./DialogsList";
import { SearchIcon } from "../../images/svg/SearchIcon";
import SwitchableIcon from "../SwitchableIcon";
import UsersList from "./UsersList";
import { useState } from "react";
import { LogOutIcon } from "../../images/svg/LogOutIcon";
import { logOutUser } from "../../redux/user/user-operations";
import { useDispatch } from "react-redux";



const DialogsSection = () => {
  const [view, setView] = useState("dialogs");
  const dispatch = useDispatch()
  const onLogOut =()=> {
    dispatch(logOutUser())
  }

  return (
    <section className={s.section}>
      <div className={s.header}>
        <Avatar>Me</Avatar>
        <button className={s.logOutBtn} onClick={onLogOut}>
        <LogOutIcon className={s.logOutIcon}/>
        </button>
      </div>

      <div className={s.searchBox}>
        <SearchIcon className={s.icon} />
        <input className={s.searchInput} type="text" />
        <SwitchableIcon view={view} setView={setView}/>
      </div>
      {view === "dialogs" && <DialogsList/>}
      {view === "users" && <UsersList/>}
    </section>
  );
};

export default DialogsSection;
 