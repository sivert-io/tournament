import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "teams",
})
export default class Team extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "owner",
  })
  owner?: string;

  @Column({
    type: DataType.STRING(255),
    field: "members",
  })
  members?: string;

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
