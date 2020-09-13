var express = require("express");
var router = express.Router();
const db = require("../src/models");

/* POST Add Followers. */
router.post("/addFollowers", async (req, res, next) => {
  console.log("========================>", req.body.user_id);
  try {
    let followersObj = {
      user_id: req.body.user_id,
      follower_id: req.body.follower_id,
      status: "Active",
    };
    let followers = await db.UserFollowers.create(followersObj);
    let resData = {
      _isSuccess: true,
      message: "success",
      data: followers,
      statusCode: 200,
    };
    return res.json(resData);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
