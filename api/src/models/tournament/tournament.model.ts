import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "tournaments",
})
export class Tournament extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "name",
  })
  name?: string;

  @Column({
    type: DataType.STRING(255),
    field: "type",
  })
  type?: string;
}
