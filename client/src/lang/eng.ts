import { language } from "../types/language";

export const eng: language = {
  player: {
    time_played: "Time played",
    hours: "hours",
    rating: "Rating",
  },
  teams: {
    create_new_team: "New team",
    label_name: "Name",
    label_slug: "Abbreviation",
    label_logo: "Logo",
    rules_title: "Rules",
    label_remove_logo: "Remove image",
    rules_description:
      "Make sure your team name is cool and respectful, and be sure the picture ain't no nonsense! 😉",
    my_teams: "My teams",
    all_teams: "All teams",
    invite_only: "Invite required",
    use_border: "Enable border?",
    border_color: "Border color",
    border_thickness: "Border thickness",
    logo_zoom: "Zoom",
    preview: "Preview",
  },
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
    accept: "Accept",
    cancel: "Cancel",
    decline: "Decline",
    create: "Create",
  },
  home: {
    relevant_tournaments: "Relevant for you",
    playing_right_now: "Matches being played",
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
