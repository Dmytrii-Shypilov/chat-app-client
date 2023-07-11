import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { io } from "socket.io-client";

import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
 const socket = io.connect("http://localhost:4000")
function App() {
 
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
