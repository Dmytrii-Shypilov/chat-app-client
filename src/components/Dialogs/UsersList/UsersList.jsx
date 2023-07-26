import s from './users-list.module.scss'

import UsersListItem from './UsersListItem'
const users = [
    {
      userName: "Dmytrii Shypilov",
      message: "Hi. How are you?",
      time: "21:30",
      unread: 3,
      isFriend: true,
    },
    {
      userName: "Dmytrii Shypilov",
      message: "Hi. How are you?",
      time: "21:30",
      unread: 3,
      isFriend: false,
    },
    {
      userName: "Dmytrii Shypilov",
      message: "Hi. How are you?",
      time: "21:30",
      unread: 3,
      isFriend: true,
    },
    {
      userName: "Dmytrii Shypilov",
      message: "Hi. How are you?",
      time: "21:30",
      unread: 3,
      isFriend: true,
    },
    {
      userName: "Dmytrii Shypilov",
      message: "Hi. How are you?",
      time: "21:30",
      unread: 3,
      isFriend: false,
    },
  ];

const UsersList = () => {
    const usersList = users.map(user => <UsersListItem {...user}/>)
    return (
        <ul>
            {usersList}
        </ul>
    )
}

export default UsersList