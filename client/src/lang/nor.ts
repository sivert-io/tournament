import { language } from "./type";

export const nor: language = {
  generic: {
    back: "Tilbake",
    next: "Neste",
    not_found: "Fant ingeting",
    go_back: "Gå tilbake",
    go_home: "Gå hjem",
  },
  home: {
    relevant_tournaments: "Aktuelt for deg",
    playing_right_now: "Spilles akkurat nå",
  },
  user: {
    sign_in: "Logg inn med steam",
    sign_out: "Logg ut",
  },
  sidebar: {
    home: "Hjem",
    players: "Spillere",
    tournaments: "Turneringer",
    teams: "Lag",
    my_teams: "Mine lag",
    my_tournaments: "Dine turneringer",
    my_recent_matches: "Dine tidligere kamper",
    admin: {
      admin: "Admin",
      create_tournament: "Lag ny turnering",
    },
  },
} as const;
