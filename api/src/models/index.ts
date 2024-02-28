import { Match } from "./match/match.model";
import { Team } from "./team/team.model";
import { TeamMember } from "./team/teamMember.model";
import { TeamParticipant } from "./tournament/teamParticipant.model";
import { Tournament } from "./tournament/tournament.model";
import { UserParticipant } from "./tournament/userParticipant.model";
import { User } from "./user/user.model";

export default [
  User,
  Team,
  Tournament,
  Match,
  TeamMember,
  TeamParticipant,
  UserParticipant,
];
