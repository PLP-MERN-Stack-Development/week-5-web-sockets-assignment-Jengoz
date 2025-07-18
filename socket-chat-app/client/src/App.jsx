import { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {!username ? (
        <Login setUsername={setUsername} />
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
}