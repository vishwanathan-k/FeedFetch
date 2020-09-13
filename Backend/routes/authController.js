var express = require("express");
var router = express.Router();
const db = require("../src/models");
const jwt = require("jsonwebtoken");
/* POST Add Users. */
router.post("/signUp", async (req, res, next) => {
  try {
    let existingUser = await db.User.findOne({
      where: { email: req.body.email },
    });
    if (existingUser) {
      let resData = {
        _isSuccess: false,
        message: "This user already exists.",
        data: [],
        statusCode: 204,
      };
      return res.json(resData);
    } else {
      let password = jwt.sign({ foo: "password" }, "password123");
      let userObj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: password,
        status: "Active",
      };
      let user = await db.User.create(userObj);
      let resData = {
        _isSuccess: true,
        message: "success",
        data: user,
        statusCode: 200,
      };
      return res.json(resData);
    }
  } catch (error) {
    return res.json(error);
  }
});

/* POST Add Users. */
router.post("/signIn", async (req, res, next) => {
  try {
    let existingUser = await db.User.findOne({
      where: { email: req.body.email },
    });
    if (req.body.email === "") {
      let resData = {
        _isSuccess: false,
        message: "Username empty vlaue is not accepted",
        data: [],
        statusCode: 201,
      };
      return res.json(resData);
    } else if (req.body.password === "") {
      let resData = {
        _isSuccess: false,
        message: "Password empty vlaue is not accepted",
        data: [],
        statusCode: 202,
      };
      return res.json(resData);
    } else if (existingUser === null || existingUser === undefined) {
      let resData = {
        _isSuccess: false,
        message: "User does not exist.",
        data: [],
        statusCode: 404,
      };
      return res.json(resData);
    } else {
      let password = jwt.verify(existingUser.password, "password123");
      if (req.body.password === password.foo) {
        let token = jwt.sign({ foo: existingUser }, "feedfetch");
        let resData = {
          _isSuccess: true,
          message: "Login success.",
          data: token,
          user_id: existingUser.id,
          statusCode: 200,
        };
        return res.json(resData);
      } else {
        let resData = {
          _isSuccess: false,
          message: "Password dose not match.",
          data: [],
          statusCode: 203,
        };
        return res.json(resData);
      }
    }
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
