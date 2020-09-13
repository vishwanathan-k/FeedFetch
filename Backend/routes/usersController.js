var express = require("express");
var router = express.Router();
const db = require("../src/models");

/* GET users listing. */
router.get("/getAllUser", async (req, res, next) => {
  try {
    let users = await db.User.findAll({
      include: [
        {
          model: db.Post,
          as: "post",
        },
        {
          model: db.UserFollowers,
          as: "userFollowers",
        },
      ],
    });
    let resData = {
      _isSuccess: true,
      message: "success",
      data: users,
      statusCode: 200,
    };
    return res.json(resData);
  } catch (error) {
    return res.json(error);
  }
});

/* GET one user data. */
router.get("/getOneUser/:id", async (req, res, next) => {
  try {
    let users = await db.User.findOne({
      include: [
        {
          model: db.Post,
          as: "post",
        },
        {
          model: db.UserFollowers,
          as: "userFollowers",
        },
      ],
      where: { id: req.params.id },
    });
    let resData = {
      _isSuccess: true,
      message: "success",
      data: users,
      statusCode: 200,
    };
    return res.json(resData);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
