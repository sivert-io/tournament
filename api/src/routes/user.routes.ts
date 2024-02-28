import { Router } from "express";
import { getAll, registerNewUser } from "../controllers/user.controller";

class Routes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/register", registerNewUser);
    this.router.get("/", getAll);
  }
}

export default new Routes().router;
