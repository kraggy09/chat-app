import express from "express";
const router = express.Router();
import {
  loginUser,
  logOutUser,
  signUpUser,
} from "../controllers/auth.controller.js";

router.post("/login", loginUser);
router.post("/logout", logOutUser);
router.post("/signup", signUpUser);
export default router;
