import { language } from "./type";

export const nor: language = {
  generic: {
    back: "Tilbake",
    next: "Neste",
    not_found: "Fant ingeting",
    go_back: "Gå tilbake",
  },
  home: {
    relevant_tournaments: "Aktuelt for deg",
  },
  user: {
    sign_in: "Logg inn med steam",
    sign_out: "Logg ut",
  },
  sidebar: {
    players: "Spillere",
    tournaments: "Turneringer",
    teams: "Lag",
    my_teams: "Mine lag",
    my_tournaments: "Mine turneringer",
    recent_matches: "Tidligere kamper",
    admin: {
      admin: "Admin",
      create_tournament: "Lag ny turnering",
    },
  },
} as const;
