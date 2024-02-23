export type language = {
  generic: {
    back: string;
    next: string;
    not_found: string;
    go_back: string;
    go_home: string;
  };
  home: {
    relevant_tournaments: string;
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
