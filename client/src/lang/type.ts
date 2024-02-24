export type language = {
  table: {
    player_name: string;
    player_rank: string;
    player_main_team: string;
    player_tournament_wins: string;
    player_tournaments_participated: string;
  };
  generic: {
    back: string;
    next: string;
    not_found: string;
    go_back: string;
    go_home: string;
  };
  home: {
    relevant_tournaments: string;
    playing_right_now: string;
  };
  user: {
    sign_in: string;
    sign_out: string;
  };
  sidebar: {
    home: string;
    players: string;
    teams: string;
    tournaments: string;
    my_teams: string;
    my_tournaments: string;
    my_recent_matches: string;
    admin: {
      admin: string;
      create_tournament: string;
    };
  };
};
