import express from "express";

import { getAllUsers, helloWorld } from "../controllers/users";

import { isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.get("/", helloWorld);
};
