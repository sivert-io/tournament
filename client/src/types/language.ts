export type language = {
  table: {
    player_name: string;
    player_rank: string;
    player_main_team: string;
    player_tournament_wins: string;
    player_tournaments_participated: string;
  };
  teams: {
    create_new_team: string;
    label_name: string;
    label_slug: string;
    label_logo: string;
    rules_title: string;
    rules_description: string;
    label_remove_logo: string;
    my_teams: string;
    all_teams: string;
    invite_only: string;
    border_color: string;
    use_border: string;
    preview: string;
    logo_zoom: string;
    border_thickness: string;
  };
  generic: {
    back: string;
    next: string;
    not_found: string;
    go_back: string;
    go_home: string;
    cancel: string;
    accept: string;
    decline: string;
    create: string;
  };
  home: {
    relevant_tournaments: string;
    playing_right_now: string;
  };
  user: {
    sign_in: string;
    sign_out: string;
  };
  notifications: {
    empty: string;
    invitation: string;
  };
  sidebar: {
    home: string;
    players: string;
    teams: string;
    tournaments: string;
    matches: string;
    my_teams: string;
    my_tournaments: string;
    my_recent_matches: string;
    admin: {
      admin: string;
      create_tournament: string;
    };
  };
};
