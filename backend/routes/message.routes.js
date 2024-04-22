import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controllers/message.controller.js";
import { checkAuth } from "../middlewares/protectedRoute.js";
const router = express.Router();

router.post("/send-message/:recieverId", checkAuth, sendMessage);
router.post("/get-messages/:recieverId", checkAuth, getAllMessages);

export default router;
