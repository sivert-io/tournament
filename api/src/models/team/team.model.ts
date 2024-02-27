import { Model, Table, Column, DataType } from "sequelize-typescript";
import { User } from "../user/user.model";

@Table({
  tableName: "teams",
})
export class Team extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
    field: "owner",
    references: {
      model: User,
      key: "id",
    },
  })
  owner?: number;

  @Column({
    type: DataType.STRING(255),
    field: "name",
  })
  name?: string;

  @Column({
    type: DataType.STRING(4),
    field: "slug",
  })
  slug?: string;

  @Column({
    type: DataType.STRING(255),
    field: "logoURL",
  })
  logoURL?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "requiresInvitation",
  })
  requiresInvitation?: boolean;
}
