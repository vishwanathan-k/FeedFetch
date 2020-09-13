var express = require("express");
var router = express.Router();
const db = require("../src/models");

/* POST Add Post. */
router.post("/addPost", async (req, res, next) => {
  try {
    console.log("=========body=========>", req.body);
    let postObj = {
      user_id: req.body.user_id,
      post_comment: req.body.post_comment,
      status: "Active",
    };
    let post = await db.Post.create(postObj);
    let resData = {
      _isSuccess: true,
      message: "success",
      data: post,
      statusCode: 200,
    };
    return res.json(resData);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
