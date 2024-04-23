import { Router } from "express";
import { getAllUser } from "../controllers/user.controller.js";
import { checkAuth } from "../middlewares/protectedRoute.js";

const router = Router();
router.get("/get-all-users", checkAuth, getAllUser);
export default router;
