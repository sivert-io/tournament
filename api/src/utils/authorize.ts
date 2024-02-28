import { NextFunction, Request, Response } from "express";

export async function authorizeRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from the header
  const APIKEY = process.env.API_TOKEN;
  if (token !== APIKEY) {
    res.status(400).send("Invalid or missing access_token!");
  } else {
    next();
  }
}
