import { Team } from "@/types/team";

export const fakeTeam1: Team = {
  slug: "AST",
  name: "Astralis",
  logoURL: "/games/cs.svg",
} as const;

export const fakeTeam2: Team = {
  slug: "NIP",
  name: "Ninjas In Pyjamas",
  logoURL: "/games/cs.svg",
} as const;

export const fakeTeam3: Team = {
  slug: "VP",
  name: "Virtus.pro",
  logoURL: "/games/cs.svg",
} as const;

export const fakeTeam4: Team = {
  slug: "C9",
  name: "Cloud9",
  logoURL: "/games/cs.svg",
} as const;
