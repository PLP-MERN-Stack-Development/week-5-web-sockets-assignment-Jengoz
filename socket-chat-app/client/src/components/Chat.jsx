import { useEffect, useState, useRef } from "react";
import { useSocket } from "../socket/socket";

export default function Chat({ username }) {
  const [input, setInput] = useState("");
  const typingTimeoutRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Use the custom hook for socket state and actions
  const {
    messages,
    typingUsers,
    sendMessage,
    setTyping,
    connect,
    disconnect,
  } = useSocket();

  useEffect(() => {
    connect(username);
    return () => disconnect();
    // eslint-disable-next-line
  }, [username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({
      user: username,
      text: input.trim(),
      time: new Date().toLocaleTimeString(),
    });
    setInput("");
    setTyping(false);
  };

  const handleTyping = () => {
    setTyping(true);
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="text-sm">
            <span className="font-semibold">{msg.user || msg.sender}</span>:{" "}
            <span>{msg.text || msg.message}</span>{" "}
            <span className="text-xs text-gray-400 ml-2">{msg.time || msg.timestamp}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {typingUsers.length > 0 && (
        <div className="text-xs text-gray-500 italic mb-2">
          {typingUsers.join(", ")} {typingUsers.length === 1 ? "is" : "are"} typing...
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleTyping}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}