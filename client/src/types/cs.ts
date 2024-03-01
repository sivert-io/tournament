export type CsStatName =
  | "total_kills"
  | "total_deaths"
  | "total_time_played"
  | "total_planted_bombs"
  | "total_defused_bombs"
  | "total_wins"
  | "total_damage_done"
  | "total_money_earned"
  | "total_kills_knife"
  | "total_kills_hegrenade"
  | "total_kills_glock"
  | "total_kills_deagle"
  | "total_kills_elite"
  | "total_kills_fiveseven"
  | "total_kills_xm1014"
  | "total_kills_mac10"
  | "total_kills_ump45"
  | "total_kills_p90"
  | "total_kills_awp"
  | "total_kills_ak47"
  | "total_kills_aug"
  | "total_kills_famas"
  | "total_kills_g3sg1"
  | "total_kills_m249"
  | "total_kills_headshot"
  | "total_kills_enemy_weapon"
  | "total_wins_pistolround"
  | "total_wins_map_cs_office"
  | "total_wins_map_de_cbble"
  | "total_wins_map_de_dust2"
  | "total_wins_map_de_inferno"
  | "total_wins_map_de_nuke"
  | "total_wins_map_de_train"
  | "total_weapons_donated"
  | "total_kills_enemy_blinded"
  | "total_kills_knife_fight"
  | "total_kills_against_zoomed_sniper"
  | "total_dominations"
  | "total_domination_overkills"
  | "total_revenges"
  | "total_shots_hit"
  | "total_shots_fired"
  | "total_rounds_played"
  | "total_shots_deagle"
  | "total_shots_glock"
  | "total_shots_elite"
  | "total_shots_fiveseven"
  | "total_shots_awp"
  | "total_shots_ak47"
  | "total_shots_aug"
  | "total_shots_famas"
  | "total_shots_g3sg1"
  | "total_shots_p90"
  | "total_shots_mac10"
  | "total_shots_ump45"
  | "total_shots_xm1014"
  | "total_shots_m249"
  | "total_hits_deagle"
  | "total_hits_glock"
  | "total_hits_elite"
  | "total_hits_fiveseven"
  | "total_hits_awp"
  | "total_hits_ak47"
  | "total_hits_aug"
  | "total_hits_famas"
  | "total_hits_g3sg1"
  | "total_hits_p90"
  | "total_hits_mac10"
  | "total_hits_ump45"
  | "total_hits_xm1014"
  | "total_hits_m249"
  | "total_rounds_map_cs_office"
  | "total_rounds_map_de_cbble"
  | "total_rounds_map_de_dust2"
  | "total_rounds_map_de_inferno"
  | "total_rounds_map_de_nuke"
  | "total_rounds_map_de_train"
  | "last_match_t_wins"
  | "last_match_ct_wins"
  | "last_match_wins"
  | "last_match_max_players"
  | "last_match_kills"
  | "last_match_deaths"
  | "last_match_mvps"
  | "last_match_favweapon_id"
  | "last_match_favweapon_shots"
  | "last_match_favweapon_hits"
  | "last_match_favweapon_kills"
  | "last_match_damage"
  | "last_match_money_spent"
  | "last_match_dominations"
  | "last_match_revenges"
  | "total_mvps"
  | "total_gun_game_rounds_won"
  | "total_gun_game_rounds_played"
  | "total_wins_map_de_vertigo"
  | "total_matches_won"
  | "total_matches_played"
  | "total_gg_matches_played"
  | "total_contribution_score"
  | "last_match_contribution_score"
  | "last_match_rounds"
  | "total_kills_hkp2000"
  | "total_shots_hkp2000"
  | "total_hits_hkp2000"
  | "total_hits_p250"
  | "total_kills_p250"
  | "total_shots_p250"
  | "total_kills_sg556"
  | "total_shots_sg556"
  | "total_hits_sg556"
  | "total_hits_scar20"
  | "total_kills_scar20"
  | "total_shots_scar20"
  | "total_shots_ssg08"
  | "total_hits_ssg08"
  | "total_kills_ssg08"
  | "total_shots_mp7"
  | "total_hits_mp7"
  | "total_kills_mp7"
  | "total_kills_mp9"
  | "total_shots_mp9"
  | "total_hits_mp9"
  | "total_hits_nova"
  | "total_kills_nova"
  | "total_shots_nova"
  | "total_hits_negev"
  | "total_kills_negev"
  | "total_shots_negev"
  | "total_shots_bizon"
  | "total_hits_bizon"
  | "total_kills_bizon"
  | "total_kills_tec9"
  | "total_shots_tec9"
  | "total_hits_tec9"
  | "total_shots_mag7"
  | "total_hits_mag7"
  | "total_kills_mag7"
  | "total_kills_m4a1"
  | "total_kills_galilar"
  | "total_kills_molotov"
  | "total_kills_taser"
  | "total_shots_m4a1"
  | "total_shots_galilar"
  | "total_shots_taser"
  | "total_hits_m4a1"
  | "total_hits_galilar"
  | "total_rounds_map_de_vertigo"
  | "GI.lesson.csgo_instr_explain_buymenu"
  | "GI.lesson.csgo_instr_explain_bomb_carrier"
  | "GI.lesson.Csgo_cycle_weapons_kb"
  | "GI.lesson.csgo_instr_explain_reload"
  | "GI.lesson.version_number";

export type CsNamedStat = {
  name: CsStatName;
  value: number;
};

export type CsStats = {
  [name in CsStatName]: number;
};
