import { Router } from "express";
import { get, register } from "../controllers/user.controller";

class Routes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/register", register);
    this.router.get("/", get);
  }
}

export default new Routes().router;
