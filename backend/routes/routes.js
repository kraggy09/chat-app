import express from "express";
import authRoutes from "./auth.routes.js";
import chatRoutes from "./message.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/chat", chatRoutes);

export default router;
