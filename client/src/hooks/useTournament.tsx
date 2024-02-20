"use client";
import { socket } from "@/socket/socket";
import { Database } from "brackets-manager";
import { useEffect, useState } from "react";

function useTournament(tournamentId: number) {
  const [data, setData] = useState<Database | null | undefined>(undefined);

  useEffect(() => {
    socket.emit("get_all_data", tournamentId, (res: Database) => {
      setData(res);
    });
  }, [tournamentId]);

  return { ...data };
}

export { useTournament };
