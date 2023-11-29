const express = require("express");
const { registerUser, loginUser, logout, getUserDetails, updateProfile, getAllUser, getSingleUser} = require("../controllers/userControler");
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/me").get( getUserDetails);
router.route("/logout").get(logout);

router.route("/me/update").put( updateProfile);

router.route("/users").get( getAllUser);
router.route("/user/:id").get(getSingleUser);

module.exports = router;