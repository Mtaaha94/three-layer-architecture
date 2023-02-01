const express = require('express');
const router = express.Router();
import * as UserController from "../controller/UserController";

//create user
router.post("/", UserController.createUser);

//get user
router.get("/:userId", UserController.getUser);

//update user
router.patch("/", UserController.updateUser);

module.exports = router;