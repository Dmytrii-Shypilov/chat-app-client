import s from "./dialogs-list.module.scss";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { getUser } from "../../../redux/user/user-selector";

import DialogItem from "./DialogItem";

const DialogsList = ({ dialogs }) => {
  const { id } = useSelector(getUser);

  const allCreatedByUser = dialogs.every(el=> (el.participants.find(el=> el.id === id)).accepted)
 
  const dialogsList =
    dialogs.length && !allCreatedByUser ? (
      dialogs.map((dialog) => {
        const colocutor = dialog.participants.find((el) => el.id !== id);
        return <DialogItem colocutor={colocutor} dialog={dialog}  />;
      })
    ) : (
      <p class="message">You don't have active dialogs</p>
    );
  return <ul className={s.dialogs}>{dialogsList}</ul>;
};

export default DialogsList;
