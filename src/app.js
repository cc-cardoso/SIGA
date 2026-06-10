const path = require("path");
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");

const routes = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "siga_dev_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(routes);

module.exports = app;

