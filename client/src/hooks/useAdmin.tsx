import { socket } from "@/socket/socket";
import { useEffect, useState } from "react";
import { useSteam } from "./useSteam";
import { useSession } from "next-auth/react";

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [status, setStatus] = useState<"loading" | "finished">("loading");
  const [powerLevel, setPower] = useState(0);
  const steam = useSteam();
  const session = useSession();

  useEffect(() => {
    if (session.status === "loading") return;

    if (steam) {
      socket.emit(
        "authenticated",
        steam,
        (response: { isAdmin: boolean; powerLevel: number }) => {
          setIsAdmin(response.isAdmin);
          setPower(response.powerLevel);
          setStatus("finished");
        }
      );
    }
  }, [session.status, steam]);

  return {
    status,
    isAdmin,
    powerLevel,
  };
}
