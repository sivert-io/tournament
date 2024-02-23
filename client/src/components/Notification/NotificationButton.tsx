import { RiNotification2Line } from "@remixicon/react";
import React from "react";

export default function NotificationButton() {
  return (
    <button className="p-2 hover:bg-base-1 rounded-lg">
      <RiNotification2Line size={18} color="white" />
    </button>
  );
}
