var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usersController");
var authRouter = require("./routes/authController");
var postRouter = require("./routes/postController");
var userFollowersRouter = require("./routes/userFollowersController");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/userFollowers", userFollowersRouter);

console.log("***** Node Server Started *****");
module.exports = app;
