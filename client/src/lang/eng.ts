import { language } from "../types/language";

export const eng: language = {
  notifications: {
    empty: "You have no alerts",
    invitation: "You've been invited!",
  },
  table: {
    player_main_team: "Main team",
    player_name: "Name",
    player_rank: "Rank",
    player_tournament_wins: "Tournament wins",
    player_tournaments_participated: "Tournaments participated",
  },
  generic: {
    back: "Back",
    next: "Next",
    not_found: "Could not find any tournament",
    go_back: "Go back",
    go_home: "Go home",
  },
  home: {
    relevant_tournaments: "Relevant for you",
    playing_right_now: "Live now",
  },
  user: {
    sign_in: "Sign in with steam",
    sign_out: "Sign out",
  },
  sidebar: {
    matches: "Matches",
    home: "Home",
    players: "Players",
    tournaments: "Tournaments",
    teams: "Teams",
    my_teams: "My teams",
    my_tournaments: "Your live tournaments",
    my_recent_matches: "Your recent matches",
    admin: {
      admin: "Admin",
      create_tournament: "Create new tournament",
    },
  },
} as const;
