import { Request, Response } from "express";
import { User } from "../models/user/user.model";

export async function registerNewUser(req: Request, res: Response) {
  const userData: User = req.body;
  const findUser = await User.findOne({
    where: { steamId: userData.steamId },
  });
  if (findUser) {
    res.status(200).json({ message: "User already exists" });
  } else {
    await User.create({ ...userData });
    res.status(200).json({ message: "New user registered" });
  }
}

export async function getAll(req: Request, res: Response) {
  const users = await User.findAll();
  return res.json({ users });
}
