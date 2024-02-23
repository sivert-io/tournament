"use client";
import { socket } from "@/socket/socket";
import { tournaments } from "@/types/tournament";
import { useEffect, useState } from "react";

function useTournament(tournamentId?: number) {
  const [data, setData] = useState<tournaments | null | undefined>(undefined);

  useEffect(() => {
    socket.emit("get_all_data", tournamentId, (res: tournaments) => {
      setData(res);
    });
  }, [tournamentId]);

  return { ...data };
}

export { useTournament };
