import s from './dialogs-list.module.scss'

import DialogItem from './DialogItem';

// const items = [
//     {
//       userName: "Dmytrii Shypilov",
//       message: "Hi. How are you?",
//       time: "21:30",
//       unread: 3,
//     },
//     {
//       userName: "Dmytrii Shypilov",
//       message: "Hi. How are you?",
//       time: "21:30",
//       unread: 3,
//     },
//     {
//       userName: "Dmytrii Shypilov",
//       message: "Hi. How are you?",
//       time: "21:30",
//       unread: 3,
//     },
//     {
//       userName: "Dmytrii Shypilov",
//       message: "Hi. How are you?",
//       time: "21:30",
//       unread: 3,
//     },
//     {
//       userName: "Dmytrii Shypilov",
//       message: "Hi. How are you?",
//       time: "21:30",
//       unread: 3,
//     },
//   ];

const DialogsList = ({dialogs})=> {
    const dialogsList = dialogs.length ? dialogs.map((dialog) => <DialogItem {...dialog} />) : <p class="message">You don't have active dialogs</p>;
    return <ul className={s.dialogs}>{dialogsList}</ul>
}

export default DialogsList