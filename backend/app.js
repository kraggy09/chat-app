import express from "express";
import cookieParser from "cookie-parser";
import dotEnv from "dotenv";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

dotEnv.config();
app.use(cookieParser());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  return res.status(200).json({
    msg: "Hello world!!",
    success: true,
  });
});

app.use("/api/v1", router);
export default app;
