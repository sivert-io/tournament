import { language } from "./type";

export const nor: language = {
  home: {
    relevant_tournaments: "Aktuelt for deg",
  },
  navbar: {
    home: "Hjem",
    tournaments: "Turneringer",
    sign_in: "Logg inn med steam",
    sign_out: "Logg ut",
    my_teams: "Mine lag",
    my_tournaments: "Mine turneringer",
    admin: {
      admin: "Admin",
      create_tournament: "Lag ny turnering",
    },
  },
  tournament: {
    not_found: "Fant ingen turnering",
    go_back: "Gå tilbake",
  },
} as const;
