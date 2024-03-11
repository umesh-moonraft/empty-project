import express from "express";
import { get, merge } from "lodash";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    // const sessionToken = req.cookies["PLUTO-AUTH"];

    // if (!sessionToken) return res.sendStatus(403);

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
