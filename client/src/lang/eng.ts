import { language } from "./type";

export const eng: language = {
  home: {
    relevant_tournaments: "Relevant for you",
  },
  navbar: {
    home: "Home",
    tournaments: "Tournaments",
    sign_in: "Sign in with steam",
    sign_out: "Sign out",
    my_teams: "My teams",
    my_tournaments: "My tournaments",
    admin: {
      admin: "Admin",
      create_tournament: "Create new tournament",
    },
  },
  tournament: {
    not_found: "Could not find any tournament",
    go_back: "Go back",
  },
} as const;
