import s from "./dialogs.module.scss";

import { Avatar, Input } from "@mui/material";
import DialogItem from "./DialogItem";
import { SearchIcon } from "../../images/svg/SearchIcon";
import { TextField, Box } from "@mui/material";

const items = [
  {
    userName: "Dmytrii Shypilov",
    message: "Hi. How are you?",
    time: "21:30",
    unread: 3,
  },
  {
    userName: "Dmytrii Shypilov",
    message: "Hi. How are you?",
    time: "21:30",
    unread: 3,
  },
  {
    userName: "Dmytrii Shypilov",
    message: "Hi. How are you?",
    time: "21:30",
    unread: 3,
  },
  {
    userName: "Dmytrii Shypilov",
    message: "Hi. How are you?",
    time: "21:30",
    unread: 3,
  },
  {
    userName: "Dmytrii Shypilov",
    message: "Hi. How are you?",
    time: "21:30",
    unread: 3,
  },
];

const DialogsSection = () => {
  const dialogs = items.map((dialog) => <DialogItem {...dialog} />);
  return (
    <section className={s.section}>
      <div className={s.header}>
        <Avatar>Me</Avatar>
      </div>

      <div className={s.searchBox}>
        <SearchIcon className={s.icon}/>
        <input className={s.searchInput} type="text" />
      </div>
      <ul className={s.dialogs}>{dialogs}</ul>
    </section>
  );
};

export default DialogsSection;
