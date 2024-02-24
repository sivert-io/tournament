import { NotificationType } from "@/types/notification";
import { RiCheckFill, RiCrossFill } from "@remixicon/react";

export function NotificationItem({ data }: { data: NotificationType }) {
  if (data.type === "invitation")
    return (
      <div className="flex flex-col">
        <h1 className="text-sm font-medium">{data.title}</h1>
        <p className="text-xs">{data.description}</p>
        <div className="flex gap-4">
          <button className="p-2 bg-primary">
            <RiCheckFill size={12} />
          </button>
          <button className="p-2 bg-red-400">
            <RiCrossFill size={12} />
          </button>
        </div>
      </div>
    );
}
