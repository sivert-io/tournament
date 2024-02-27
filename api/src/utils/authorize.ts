import { NextFunction, Request, Response } from "express";

export async function authorizeRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const APIKEY = process.env.API_TOKEN;
  if (req.token !== APIKEY) {
    res.status(400).send("Invalid or missing access_token!");
  }

  next();
}
