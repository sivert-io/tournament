import { Request, Response } from "express";

export function register(req: Request, res: Response): Response {
  const userData = req.body;

  // Insert into db here

  return res.status(200);
}

export function get(req: Request, res: Response) {
  return res.json({ users: [] });
}
