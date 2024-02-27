import { Model, Table, Column, DataType } from "sequelize-typescript";
import { Team } from "../team/team.model";
import { User } from "../user/user.model";

@Table({
  tableName: "teamMembers",
})
export class TeamMember extends Model {
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
    field: "userId",
    references: {
      model: User,
      key: "id",
    },
  })
  userId?: number;
}
