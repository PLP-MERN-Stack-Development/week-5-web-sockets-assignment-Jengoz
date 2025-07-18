import { useEffect } from "react";

const useNotifications = (lastMessage) => {
  useEffect(() => {
    if (!lastMessage || lastMessage.system) return;

    // Don't notify on your own messages
    const sender = lastMessage.sender;
    const message = lastMessage.message;

    // Browser Notification
    if (Notification.permission === "granted") {
      new Notification(`${sender} says:`, {
        body: message,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }

    // Sound
    const audio = new Audio("/notification.mp3");
    audio.play();
  }, [lastMessage]);
};

export default useNotifications;
