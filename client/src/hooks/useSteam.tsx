import { socket } from "@/socket/socket";
import { SteamProfile } from "next-auth-steam";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function useSteam() {
  const session = useSession();
  const [steam, setSteam] = useState<SteamProfile | null>(null);

  useEffect(() => {
    if (steam === null && session.data) {
      const data: SteamProfile = (session.data.user as any).steam;
      setSteam(data);
      socket.emit("registerUser", data);
    }
  }, [session.data, steam]);

  return steam;
}

export { useSteam };
