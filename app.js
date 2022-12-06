var express = require("express");
var path = require("path");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res) => res.send("Hi there"));

module.exports = app;
