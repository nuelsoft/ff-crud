const express = require("express");
const logger = require("morgan");

const Persistence = require("./persistence");

const app = express();

Persistence.initialize();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes"));

module.exports = app;
