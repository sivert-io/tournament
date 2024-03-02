import { socket } from "@/socket/socket";
import { Bell } from "lucide-react";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { NotificationType } from "@/types/notification";
import { lang } from "@/lang";
import { NotificationItem } from "./NotificationItem";
import { Badge, Button, Popover } from "antd";
import { Tooltip } from "@lobehub/ui";

export default function Notification() {
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      title: lang.notifications.invitation,
      type: "invitation",
      description: "Ninjas In Pyjamas",
    },
  ]);
  const [unreadNotifications, setUnreadNotifications] = useState(notifications);
  const [playNotification] = useSound("/sfx/bell.mp3", { volume: 0.25 });
  const [toolTipHasBeenUsed, setToolTipHasBeenUsed] = useState(false);

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
      <Tooltip
        arrow
        open={unreadNotifications.length > 0 && !toolTipHasBeenUsed}
        placement="bottom"
        title={lang.notifications.tooltip}
      >
        <Popover
          arrow
          placement="bottomRight"
          content={
            notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <NotificationItem key={index} data={notification} />
              ))
            ) : (
              <p className="text-sm font-bold text-center p-4">
                {lang.notifications.empty}
              </p>
            )
          }
          trigger="click"
        >
          <Button
            onClick={() => {
              setToolTipHasBeenUsed(true);
              setUnreadNotifications([]);
            }}
            icon={
              <Badge dot={unreadNotifications.length > 0} status="processing">
                <Bell size={16} />
              </Badge>
            }
            className="p-2 hover:bg-base-1 rounded-lg"
          />
        </Popover>
      </Tooltip>
    </div>
  );
}
