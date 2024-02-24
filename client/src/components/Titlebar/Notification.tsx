import { socket } from "@/socket/socket";
import { RiNotification2Fill, RiNotification2Line } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import useSound from "use-sound";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [playNotification] = useSound("/sfx/bell.mp3");

  useEffect(() => {
    socket.on("notification", (notifs) => {
      setNotifications([...notifications, ...notifs] as any);
      setUnreadNotifications(notifs);
      playNotification();
    });

    return () => {
      socket.off("notification", (notifs) => {
        setNotifications([...notifications, ...notifs] as any);
        setUnreadNotifications(notifs);
        playNotification();
      });
    };
  }, [notifications, playNotification]);
  return (
    <button className="p-2 hover:bg-base-1 rounded-lg">
      {unreadNotifications.length === 0 ? (
        <RiNotification2Line size={18} />
      ) : (
        <span className="relative flex">
          <RiNotification2Fill className={style.alert} size={18} />
          <div className="rounded-full bg-primary absolute top-0 right-0 z-10 w-2    h-2" />
        </span>
      )}
    </button>
  );
}
