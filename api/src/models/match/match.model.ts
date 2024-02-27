import { Model, Table, Column, DataType } from "sequelize-typescript";
import { Team } from "../team/team.model";
import { Tournament } from "../tournament/tournament.model";

@Table({
  tableName: "matches",
})
export class Match extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "status",
  })
  status?: "scheduled" | "in progress" | "completed";

  @Column({
    type: DataType.INTEGER,
    field: "tournamentId",
    references: {
      model: Tournament,
      key: "id",
    },
  })
  tournamentId?: number;

  @Column({
    type: DataType.INTEGER,
    field: "team1",
    references: {
      model: Team,
      key: "id",
    },
  })
  team1?: number;

  @Column({
    type: DataType.INTEGER,
    field: "team2",
    references: {
      model: Team,
      key: "id",
    },
  })
  team2?: number;

  @Column({
    type: DataType.INTEGER,
    field: "team1Score",
    references: {
      model: Team,
      key: "id",
    },
  })
  team1Score?: number;

  @Column({
    type: DataType.INTEGER,
    field: "team2Score",
    references: {
      model: Team,
      key: "id",
    },
  })
  team2Score?: number;
}
