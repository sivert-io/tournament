import { PlayerData } from "@/types/player";
import { fakeTeam1, fakeTeam2, fakeTeam3 } from "./team";
import { CommunityVisibilityState, PersonaState } from "next-auth-steam";

export const fakePlayer1: PlayerData = {
  best_tournament_position: 1,
  main_team: fakeTeam1,
  num_tournaments_participated: 5,
  teams: [fakeTeam1],
  won_tournaments: 3,
  steam: {
    steamid: "76561199486434142",
    communityvisibilitystate: CommunityVisibilityState.Public,
    profilestate: 1,
    personaname: "Simpvert",
    profileurl: "https://steamcommunity.com/id/Cloudsleep",
    avatar:
      "https://avatars.cloudflare.steamstatic.com/f946736364b2455e737e20c6cee26892eaf5773f.jpg",
    avatarmedium:
      "https://avatars.cloudflare.steamstatic.com/f946736364b2455e737e20c6cee26892eaf5773f_medium.jpg",
    avatarfull:
      "https://avatars.cloudflare.steamstatic.com/f946736364b2455e737e20c6cee26892eaf5773f_full.jpg",
    avatarhash: "f946736364b2455e737e20c6cee26892eaf5773f",
    lastlogoff: 1645478727,
    personastate: PersonaState.Online,
    primaryclanid: "103582791474387820",
    timecreated: 1679020813,
    personastateflags: 0,
    commentpermission: 1,
  },
} as const;

export const fakePlayer2: PlayerData = {
  best_tournament_position: 2,
  main_team: fakeTeam2,
  num_tournaments_participated: 4,
  teams: [fakeTeam2],
  won_tournaments: 1,
  steam: {
    steamid: "76561198069153901",
    communityvisibilitystate: 3,
    profilestate: 1,
    personaname: "Ymse",
    commentpermission: 2,
    profileurl: "https://steamcommunity.com/id/ymse/",
    avatar:
      "https://avatars.steamstatic.com/b3cc3c0414f83822222e69048b4fb67072aecd6f.jpg",
    avatarmedium:
      "https://avatars.steamstatic.com/b3cc3c0414f83822222e69048b4fb67072aecd6f_medium.jpg",
    avatarfull:
      "https://avatars.steamstatic.com/b3cc3c0414f83822222e69048b4fb67072aecd6f_full.jpg",
    avatarhash: "b3cc3c0414f83822222e69048b4fb67072aecd6f",
    lastlogoff: 1708727632,
    personastate: 3,
    realname: "( ͡° ͜ʖ ͡°)  ",
    primaryclanid: "103582791440000586",
    timecreated: 1344860508,
    personastateflags: 0,
    loccountrycode: "NO",
  },
} as const;

export const fakePlayer3: PlayerData = {
  best_tournament_position: 1,
  main_team: fakeTeam3,
  num_tournaments_participated: 8,
  teams: [fakeTeam3],
  won_tournaments: 6,
  steam: {
    steamid: "76561198024254891",
    communityvisibilitystate: 3,
    profilestate: 1,
    personaname: "Toxic bitch | Miebk",
    commentpermission: 1,
    profileurl: "https://steamcommunity.com/id/Miebk/",
    avatar:
      "https://avatars.steamstatic.com/e4c42240d904411f876d57eebe21cc756d8b9136.jpg",
    avatarmedium:
      "https://avatars.steamstatic.com/e4c42240d904411f876d57eebe21cc756d8b9136_medium.jpg",
    avatarfull:
      "https://avatars.steamstatic.com/e4c42240d904411f876d57eebe21cc756d8b9136_full.jpg",
    avatarhash: "e4c42240d904411f876d57eebe21cc756d8b9136",
    lastlogoff: 1708721492,
    personastate: 0,
    realname: "Mie",
    primaryclanid: "103582791437389465",
    timecreated: 1272123220,
    personastateflags: 0,
    loccountrycode: "NO",
    locstatecode: "06",
  },
} as const;

export const fakePlayer4: PlayerData = {
  best_tournament_position: 3,
  main_team: fakeTeam1,
  num_tournaments_participated: 6,
  teams: [fakeTeam1],
  won_tournaments: 2,
  steam: {
    steamid: "76561198028931042",
    communityvisibilitystate: 3,
    profilestate: 1,
    personaname: "Bananisman",
    commentpermission: 1,
    profileurl: "https://steamcommunity.com/id/HarryPotato/",
    avatar:
      "https://avatars.steamstatic.com/73325967750aea4e52f5939fb703b599dacefebd.jpg",
    avatarmedium:
      "https://avatars.steamstatic.com/73325967750aea4e52f5939fb703b599dacefebd_medium.jpg",
    avatarfull:
      "https://avatars.steamstatic.com/73325967750aea4e52f5939fb703b599dacefebd_full.jpg",
    avatarhash: "73325967750aea4e52f5939fb703b599dacefebd",
    lastlogoff: 1708635793,
    personastate: 0,
    realname: "Papa",
    primaryclanid: "103582791462878864",
    timecreated: 1281651570,
    personastateflags: 0,
    loccountrycode: "AQ",
  },
} as const;

export const fakePlayer5: PlayerData = {
  best_tournament_position: 2,
  main_team: fakeTeam2,
  num_tournaments_participated: 3,
  teams: [fakeTeam2],
  won_tournaments: 2,
  steam: {
    steamid: "76561198065263845",
    communityvisibilitystate: 3,
    profilestate: 1,
    personaname: "BerPer",
    commentpermission: 1,
    profileurl: "https://steamcommunity.com/id/thebeastoliver/",
    avatar:
      "https://avatars.steamstatic.com/498044cc07d4ed9c213ba5950f9f6c46e05013a2.jpg",
    avatarmedium:
      "https://avatars.steamstatic.com/498044cc07d4ed9c213ba5950f9f6c46e05013a2_medium.jpg",
    avatarfull:
      "https://avatars.steamstatic.com/498044cc07d4ed9c213ba5950f9f6c46e05013a2_full.jpg",
    avatarhash: "498044cc07d4ed9c213ba5950f9f6c46e05013a2",
    lastlogoff: 1708768139,
    personastate: 0,
    realname: "PER",
    primaryclanid: "103582791429521408",
    timecreated: 1339607168,
    personastateflags: 0,
    loccountrycode: "NO",
    locstatecode: "11",
  },
} as const;

export const fakePlayer6: PlayerData = {
  best_tournament_position: 1,
  main_team: fakeTeam3,
  num_tournaments_participated: 7,
  teams: [fakeTeam3],
  won_tournaments: 4,
  steam: {
    commentpermission: 0,
    steamid: "76561198343096427",
    communityvisibilitystate: 3,
    profilestate: 1,
    personaname: "Maling",
    profileurl: "https://steamcommunity.com/id/bizzareta/",
    avatar:
      "https://avatars.steamstatic.com/3a62205d380a332ee67ac61e87407fbf14b16a09.jpg",
    avatarmedium:
      "https://avatars.steamstatic.com/3a62205d380a332ee67ac61e87407fbf14b16a09_medium.jpg",
    avatarfull:
      "https://avatars.steamstatic.com/3a62205d380a332ee67ac61e87407fbf14b16a09_full.jpg",
    avatarhash: "3a62205d380a332ee67ac61e87407fbf14b16a09",
    lastlogoff: 1708778126,
    personastate: 3,
    realname: "Gjett da",
    primaryclanid: "103582791429521408",
    timecreated: 1478956982,
    personastateflags: 0,
    loccountrycode: "ML",
  },
} as const;

export const fakePlayers: PlayerData[] = [
  fakePlayer1,
  fakePlayer2,
  fakePlayer3,
  fakePlayer4,
  fakePlayer5,
  fakePlayer6,
] as const;
