import express from "express";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = {};

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const helloWorld = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    return res.status(200).send("Hello world");
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
