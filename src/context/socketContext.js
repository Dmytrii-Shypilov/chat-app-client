import { createContext, useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getUser } from "../redux/user/user-selector";

export const SocketContext = createContext({ socket: null });

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const { name, token, id } = useSelector(getUser);

  useEffect(() => {
    const newSocket = io.connect("http://localhost:4000", {
      auth: {
        userName: name,
        userId: id,
        token
      },
    });

    setSocket(newSocket);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(()=> {
    if(socket) {
      console.log(socket.id)
      socket.on('updateDialogs', (data)=> console.log(data))
    }
  }, [socket])

 

  const value = {
    socket,
    user: {
      name,
      token,
    },
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
