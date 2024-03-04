import { config } from "dotenv";
config();

import express, { Application } from "express";
import Server from "./src/index";

const app: Application = express();

new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8888;

app
  .listen(PORT, "localhost", function () {
    console.log(`🔒 API accessible on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.error("Error: address already in use");
    } else {
      console.error(err);
    }
  });
