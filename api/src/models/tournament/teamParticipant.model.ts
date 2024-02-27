import { Model, Table, Column, DataType } from "sequelize-typescript";
import { Tournament } from "./tournament.model";
import { Team } from "../team/team.model";

@Table({
  tableName: "teamParticipants",
})
export class TeamParticipant extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
    field: "teamId",
    references: {
      model: Team,
      key: "id",
    },
  })
  teamId?: number;

  @Column({
    type: DataType.INTEGER,
    field: "tournamentId",
    references: {
      model: Tournament,
      key: "id",
    },
  })
  tournamentId?: number;
}
