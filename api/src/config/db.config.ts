import { Dialect } from "sequelize";

export const config = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export const dialect: Dialect = "mysql";
