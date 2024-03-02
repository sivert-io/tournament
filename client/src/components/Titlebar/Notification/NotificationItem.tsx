import { lang } from "@/lang";
import { NotificationType } from "@/types/notification";
import { Button } from "antd";

export function NotificationItem({ data }: { data: NotificationType }) {
  if (data.type === "invitation")
    return (
      <div className="flex flex-col gap-2 p-1">
        <h1 className="font-medium">{data.title}</h1>
        <p className="text-sm">{data.description}</p>
        <div className="flex items-end gap-2">
          <Button size="small">{lang.generic.accept}</Button>
          <Button size="small">{lang.generic.decline}</Button>
        </div>
      </div>
    );
}
