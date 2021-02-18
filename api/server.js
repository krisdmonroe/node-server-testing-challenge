require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const UsersRouter = require("../users/router.js");


const server = express();


server.use(express.json());
server.use(cors());
server.use(helmet());


server.use("/api/users", UsersRouter);


server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;