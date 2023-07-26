import s from './dialogs-list.module.scss'

import DialogItem from './DialogItem';

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

const DialogsList = ()=> {
    const dialogs = items.map((dialog) => <DialogItem {...dialog} />);
    return <ul className={s.dialogs}>{dialogs}</ul>
}

export default DialogsList