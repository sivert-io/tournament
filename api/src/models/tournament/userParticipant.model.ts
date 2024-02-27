import { Model, Table, Column, DataType } from "sequelize-typescript";
import { User } from "../user/user.model";
import { Tournament } from "./tournament.model";

@Table({
  tableName: "userParticipants",
})
export class UserParticipant extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
    field: "participantId",
    references: {
      model: User,
      key: "id",
    },
  })
  participantId?: number;

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
