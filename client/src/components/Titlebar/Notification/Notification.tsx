import { socket } from "@/socket/socket";
import {
  RiCheckFill,
  RiCrossFill,
  RiNotification2Fill,
  RiNotification2Line,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import useSound from "use-sound";
import { NotificationType } from "@/types/notification";
import { lang } from "@/lang";
import { NotificationItem } from "./NotificationItem";

export default function Notification() {
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [unreadNotifications, setUnreadNotifications] = useState(notifications);

  const [playNotification] = useSound("/sfx/bell.mp3");

  useEffect(() => {
    function getNotification(notifs: NotificationType[]) {
      setNotifications([...notifications, ...notifs]);
      setUnreadNotifications(notifs);
      playNotification();
    }

    socket.on("notification", getNotification);

    return () => {
      socket.off("notification", getNotification);
    };
  }, [notifications, playNotification]);
  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 hover:bg-base-1 rounded-lg"
      >
        {unreadNotifications.length === 0 ? (
          <RiNotification2Line size={20} />
        ) : (
          <span className="relative flex">
            <RiNotification2Fill className={style.alert} size={20} />
            <div className="rounded-full bg-primary absolute top-0 right-0 z-10 w-2 h-2" />
          </span>
        )}
      </button>
      {showMenu && (
        <div className="absolute top-10 right-0 bg-base-1 border-2 border-base-4 rounded-lg flex flex-col gap-2 overflow-scroll w-48 max-h-[192px]">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <NotificationItem key={index} data={notification} />
            ))
          ) : (
            <p className="text-sm font-bold text-center p-4">
              {lang.notifications.empty}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
