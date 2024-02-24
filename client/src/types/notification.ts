export interface NotificationType {
  title: string;
  type: "invitation" | "reminder";
  description?: string;
  href?: string;
}
