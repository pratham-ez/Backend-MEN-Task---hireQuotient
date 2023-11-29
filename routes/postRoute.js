const express = require("express");

const { createPost } = require("../controllers/postController");

const router = express.Router();


router.route("/post/new").post(createPost);
router.route("/post/new").get(createPost);
module.exports = router ;